// eslint-disable-next-line import/no-extraneous-dependencies
import { danger, fail } from 'danger';

const CHANGELOG_PATTERN = /^packages\/terra-([a-z-0-9])*\/CHANGELOG\.md/i;

const changedFiles = danger.git.created_files.concat(danger.git.modified_files);

const changedChangelogs = new Set();
const changedPackages = new Set();

changedFiles.forEach((file) => {
  // file isn't in a package so it has no changelog, skip further processing
  if (file.substring(0, 9) !== 'packages/') {
    return;
  }

  const packageName = file.split('packages/')[1].split('/')[0];
  const fileName = file.split('packages/')[1].split('/')[1].split('/')[0];

  if (CHANGELOG_PATTERN.test(file)) {
    changedChangelogs.add(packageName);
  } else if (fileName !== 'README.md') { // file is in a package and was changed ( ignores changes made for readme file ) - we need a changelog
    changedPackages.add(packageName);
  }
});

const missingChangelogs = [...changedPackages].filter(packageName => !changedChangelogs.has(packageName));

// Fail if there are package changes without a CHANGELOG update
if (missingChangelogs.length > 0) {
  fail(`Please include a CHANGELOG entry for each changed package this PR. Looks like a CHANGELOG is missing for: \n\n - ${missingChangelogs.join('\n - ')}`);
}
