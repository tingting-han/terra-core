import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ContentContainer from 'terra-content-container';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import styles from './Table.module.scss';
import sectionShape from './proptypes/sectionShape';
import headerShape from './proptypes/headerShape';
import widthShape from './proptypes/widthShape';

import Row from './subcomponents/_Row';
import Cell from './subcomponents/_Cell';
import Section from './subcomponents/_Section';
import HeaderRow from './subcomponents/_HeaderRow';
import HeaderCell from './subcomponents/_HeaderCell';
import ChevronCell from './subcomponents/_ChevronCell';
import AccordionIconCell from './subcomponents/_AccordionIconCell';
import CheckMarkCell from './subcomponents/_CheckMarkCell';
import HeaderChevronCell from './subcomponents/_HeaderChevronCell';
import HeaderCheckMarkCell from './subcomponents/_HeaderCheckMarkCell';
import HeaderAccordionIconCell from './subcomponents/_HeaderAccordionIconCell';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * An array of sections containing rows.
   */
  bodyData: PropTypes.arrayOf(sectionShape),
  /**
   * The check mark styling to apply.
   */
  checkStyle: PropTypes.oneOf([
    'icon',
    'toggle',
  ]),
  /**
   * The divider styling to apply to the child rows.
   */
  dividerStyle: PropTypes.oneOf([
    'vertical',
    'horizontal',
    'both',
  ]),
  /**
   * The width value structures associated to each column.
   */
  columnWidths: PropTypes.arrayOf(widthShape),
  /**
   * Whether or not the rows should have chevrons applied.
   */
  hasChevrons: PropTypes.bool,
  /**
   * The data to build header cells and columns.
   */
  headerData: headerShape,
  /**
   * Element to append to the top of the table. i.e. toolbars etc.
   */
  headerNode: PropTypes.node,
  /**
   * Whether or not the table should expanded to fill its parent element.
   */
  fill: PropTypes.bool,
  /**
   * Element to append to the bottom of the table. i.e. toolbars etc.
   */
  footerNode: PropTypes.node,
  /**
   * The numberOfColumns to be used as a descriptor for assistive technology.
   */
  numberOfColumns: PropTypes.number.isRequired,
  /**
   * This value is used for accessibility when paged/virtualized rows are used.
   * By default this value is derived from the number of rows passed within the section.
   */
  numberOfRows: PropTypes.number,
  /**
   * The padding styling to apply to the cell content.
   */
  cellPaddingStyle: PropTypes.oneOf([
    'standard',
    'compact',
  ]),
  /**
   * The interaction styling to apply to the row.
   * `'toggle'` relates to the toggling of state as a means of input. `'disclose'` relates to the presentation or disclosure of another component.
   * Both variants can ultimately display as "selected", but the interaction and structure are different for accessibility.
   */
  rowStyle: PropTypes.oneOf([
    'disclose',
    'toggle',
  ]),
  /**
   * Function callback returning the html node of the table's inner body element.
   */
  scrollRefCallback: PropTypes.func,
  /**
   * Whether or not a display only footer should be affixed to the table.
   */
  showSimpleFooter: PropTypes.bool,
  /**
   * The summary text to describe the table's content and interactions.
   */
  summary: PropTypes.string.isRequired,
  /**
   * The element id to associate to the descriptive text.
   */
  summaryId: PropTypes.string.isRequired,
  /**
   * Whether or not the table contains any rows that have parent & child relationship.
   */
   hasParentChildRows: PropTypes.bool,
};

const defaultProps = {
  fill: false,
  showSimpleFooter: false,
};

const createCell = (cell, sectionId, columnId, colWidth, discloseData) => (
  <Cell
    {...cell.attrs}
    // The headers attribute is a string that gives the cell a column reading order.
    headers={sectionId && columnId ? [sectionId, columnId].join(' ') : sectionId || columnId}
    key={cell.key}
    refCallback={cell.refCallback}
    removeInner={cell.removeInner}
    width={colWidth}
    disclosureData={discloseData}
  >
    {cell.children}
  </Cell>
);

const createCheckCell = (rowData, rowStyle, checkStyle) => {
  let cellMetaData;
  let cellOnAction;
  let cellActiveState;
  let cellLabel;
  if (rowData.toggleAction) {
    cellMetaData = rowData.toggleAction.metaData;
    cellOnAction = rowData.toggleAction.onToggle;
    cellActiveState = rowData.toggleAction.isToggled;
    cellLabel = rowData.toggleAction.toggleLabel;
  }

  // Check style takes priority over the row styling. If a check is set to toggle or icon we know that it is face up.
  if (checkStyle === 'toggle' || checkStyle === 'icon') {
    return (
      <CheckMarkCell
        alignmentPadding={rowData.checkAlignment}
        metaData={cellMetaData}
        onSelect={cellOnAction}
        label={cellLabel}
        isSelectable={checkStyle === 'toggle'}
        isSelected={cellActiveState}
        isDisabled={rowData.isDisabled}
        isIcon={checkStyle === 'icon'}
      />
    );
  }

  // When the rowstyle is toggle we still to create a checkmark, but a hidden one.
  // This allows someone with a screenreader to view selection
  if (rowStyle === 'toggle') {
    return (
      <CheckMarkCell
        metaData={cellMetaData}
        onSelect={cellOnAction}
        label={cellLabel}
        isSelected={cellActiveState}
        isHidden
        isDisabled={rowData.isDisabled}
      />
    );
  }
  return undefined;
};

const createChevronCell = (rowStyle, hasChevrons) => {
  if (rowStyle === 'disclose' && hasChevrons) {
    return <ChevronCell />;
  }
  return undefined;
};

const createAccordionIconCell = (hasParentChildRows, isParentRow, areItsChildRowsCollapsed) => {
  if (hasParentChildRows) {
    if (isParentRow) {
      return (
        <AccordionIconCell 
          isCollapsed={areItsChildRowsCollapsed}
        />
      );
    } else {
      return <HeaderAccordionIconCell />;
    }
  }

  return undefined;
};

const createHeaderCheckCell = (columnData, rowStyle, checkStyle) => {
  let cellAlignment;
  let cellOnAction;
  let cellStatus;
  let cellLabel;
  let cellDisabled;
  if (columnData) {
    cellAlignment = columnData.checkAlignment;
    cellOnAction = columnData.onCheckAction;
    cellStatus = columnData.checkStatus;
    cellLabel = columnData.checkLabel;
    cellDisabled = columnData.isDisabled;
  }

  // Check style takes priority over the row styling. If a check is set to toggle or icon we know that it is face up.
  if (checkStyle === 'toggle' || checkStyle === 'icon') {
    return (
      <HeaderCheckMarkCell
        alignmentPadding={cellAlignment}
        isSelectable={checkStyle === 'toggle' && !!cellOnAction}
        isSelected={cellStatus === 'checked' || cellStatus === 'indeterminate'}
        isIndeterminate={cellStatus === 'indeterminate'}
        isDisabled={cellDisabled}
        onSelect={cellOnAction}
        label={cellLabel}
      />
    );
  }

  // When the row style is toggle we still to create a check mark, but a hidden one.
  // This allows someone with a screen reader to view selection
  if (rowStyle === 'toggle') {
    return (
      <HeaderCheckMarkCell
        label={cellLabel}
        isHidden
        isDisabled={cellDisabled}
        isSelected={cellStatus === 'checked' || cellStatus === 'indeterminate'}
        isIndeterminate={cellStatus === 'indeterminate'}
      />
    );
  }
  return undefined;
};

const createHeaderChevronCell = (rowStyle, hasChevrons) => {
  if (rowStyle === 'disclose' && hasChevrons) {
    return <HeaderChevronCell />;
  }
  return undefined;
};

const createHeaderAccordionIconCell = (hasParentChildRows) => {
  if (hasParentChildRows) {
    return <HeaderAccordionIconCell />;
  }
  return undefined;
};

const createRow = (tableData, rowData, rowIndex, sectionId, isParentRow, areItsChildRowsCollapsed) => {
  let rowMetaData;
  let rowOnAction;
  let rowActiveState;
  let primaryData;
  let primaryIndex;
  if (tableData.rowStyle === 'disclose' && rowData.discloseAction) {
    rowMetaData = rowData.discloseAction.metaData;
    rowOnAction = rowData.discloseAction.onDisclose; // The disclosure action will trigger from the entire row.
    rowActiveState = rowData.discloseAction.isDisclosed; // Disclosure will show row selection, but only the link will show to a screen reader as current.
    primaryIndex = rowData.discloseAction.discloseCellIndex; // The index of the cell that will be converted to a link for disclosure.
    primaryData = { label: rowData.discloseAction.discloseLabel, isCurrent: rowData.discloseAction.isDisclosed };
  } else if (tableData.checkStyle === 'toggle' && rowData.toggleAction) {
    // If check style is present the row should also be an actionable item, but only trigger the check mark selection state.
    rowMetaData = rowData.toggleAction.metaData;
    rowOnAction = rowData.toggleAction.onToggle;
  } else if (tableData.rowStyle === 'toggle' && rowData.toggleAction) {
    rowMetaData = rowData.toggleAction.metaData;
    rowOnAction = rowData.toggleAction.onToggle;
    // We only want to enable a selected state is check style isn't icon.
    // If icon a check mark is displayed to show selection rather than row highlight.
    rowActiveState = tableData.checkStyle !== 'icon' && rowData.toggleAction.isToggled;
  }

  return (
    <Row
      {...rowData.attrs}
      key={rowData.key}
      aria-rowindex={rowData.index || rowIndex}
      metaData={rowMetaData}
      isSelectable={tableData.rowStyle === 'toggle' || tableData.rowStyle === 'disclose' || tableData.checkStyle === 'toggle'}
      isSelected={rowActiveState}
      onSelect={rowOnAction}
      isDisabled={rowData.isDisabled}
      isStriped={rowData.isStriped}
      dividerStyle={tableData.dividerStyle}
      refCallback={rowData.refCallback}
    >
      
      {createAccordionIconCell(tableData.hasParentChildRows, isParentRow, areItsChildRowsCollapsed)}
      {createCheckCell(rowData, tableData.rowStyle, tableData.checkStyle)}
      {rowData.cells.map((cell, colIndex) => {
        const columnId = tableData.headerData && tableData.headerData.cells ? tableData.headerData.cells[colIndex].id : undefined;
        const columnWidth = tableData.columnWidths ? tableData.columnWidths[colIndex] : undefined;
        const discloseData = colIndex === primaryIndex ? primaryData : undefined;
        return createCell(cell, sectionId, columnId, columnWidth, discloseData);
      })}
      {createChevronCell(tableData.rowStyle, tableData.hasChevrons)}
    </Row>
  );
};

const createParentChildRows = (tableData, sectionData, rowIndex) => {
  const rowArray = [];
  rowIndex += 1;
  rowArray.push(createRow(tableData, sectionData.parentRow.row, rowIndex, null, true, sectionData.parentRow.areItsChildRowsCollapsed));

  if (!sectionData.parentRow.areItsChildRowsCollapsed) {
    rowArray.push(...(sectionData.rows ? sectionData.rows.map(rowData => {
      rowIndex += 1;
      return createRow(tableData, rowData, rowIndex, null, false, false);
    }) : undefined));
  }
  return rowArray;
}

/*
          {createRow(tableData, section.parentRow.row, rowIndex, null, true, section.parentRow.isCollapsed)}
          {section.rows ? section.rows.map(rowData => {
            rowIndex += 1;
            return createRow(tableData, rowData, rowIndex, null, false, false);
          }) : undefined}
*/
const createSections = (tableData, headerIndex) => {
  if (!tableData.bodyData) {
    return { sections: undefined, sectionIndex: headerIndex };
  }

  let rowIndex = headerIndex;
  let rowArray = [];
  const sections = tableData.bodyData.map((section) => {
    if (section.sectionHeader) {
      const header = section.sectionHeader;
      rowIndex += 1;
      return (
        <Section
          id={header.id}
          key={header.key}
          aria-rowindex={header.index || rowIndex}
          title={header.title}
          isCollapsed={header.isCollapsed}
          isCollapsible={!!header.onToggle}
          metaData={header.metaData}
          numberOfColumns={tableData.checkStyle !== 'toggle' && tableData.rowStyle === 'toggle' ? tableData.numberOfColumns + 1 : tableData.numberOfColumns}
          onSelect={header.onToggle}
          isSectionHeaderVisible={header.isSectionHeaderVisible}
        >
          {section.rows ? section.rows.map(rowData => {
            rowIndex += 1;
            return createRow(tableData, rowData, rowIndex, header.id, false, false);
          }) : undefined}
        </Section>
      );
    }
    //{createRow(tableData, section.parentRow, rowIndex, null, true)}
    //parent = {createRow(tableData, section.parentRow.rowData, rowIndex, null, true)}
    if (section.parentRow) {
      rowArray = [];
      rowIndex += 1;
      rowArray.push(createRow(tableData, section.parentRow.row, rowIndex, null, true, section.parentRow.areItsChildRowsCollapsed));
    
      if (!section.parentRow.isCollapsible || !section.parentRow.areItsChildRowsCollapsed) {
        rowArray.push(...(section.rows ? section.rows.map(rowData => {
          rowIndex += 1;
          return createRow(tableData, rowData, rowIndex, null, false, false);
        }) : undefined));
      }
      return rowArray;
    }
    if (section.rows) {
      return section.rows.map(rowData => {
        rowIndex += 1;
        return createRow(tableData, rowData, rowIndex, null, false, false);
      });
    }
    return undefined;
  });

  return { sections, sectionIndex: rowIndex };
};

const createHeader = (tableData) => {
  if (!tableData.headerData || !tableData.headerData.cells) {
    return { headerIndex: 0, header: undefined };
  }

  return {
    headerIndex: 1,
    header: (
      <HeaderRow
        aria-rowindex={1} // Row count begins with the header.
      >
        {createHeaderAccordionIconCell(tableData.hasParentChildRows)}
        {createHeaderCheckCell(tableData.headerData.selectAllColumn, tableData.rowStyle, tableData.checkStyle)}
        {tableData.headerData.cells.map((cellData, colIndex) => (
          <HeaderCell
            {...cellData.attrs}
            id={cellData.id}
            key={cellData.key}
            refCallback={cellData.refCallback}
            metaData={cellData.metaData}
            isSortDesc={cellData.isSortDesc}
            isSortActive={cellData.isSortActive}
            onCellAction={cellData.onCellAction}
            onSortAction={cellData.onSortAction}
            removeInner={cellData.removeInner}
            width={tableData.columnWidths ? tableData.columnWidths[colIndex] : undefined}
          >
            {cellData.children}
          </HeaderCell>
        ))}
        {createHeaderChevronCell(tableData.rowStyle, tableData.hasChevrons)}
      </HeaderRow>
    ),
  };
};

const unpackTableData = (tableData) => {
  const { headerIndex, header } = createHeader(tableData);
  const { sectionIndex, sections } = createSections(tableData, headerIndex);
  return { rowCount: sectionIndex, header, sections };
};

const Table = ({
  dividerStyle,
  hasChevrons,
  rowStyle,
  checkStyle,
  columnWidths,
  headerData,
  bodyData,
  fill,
  footerNode,
  headerNode,
  cellPaddingStyle,
  numberOfColumns,
  numberOfRows,
  scrollRefCallback,
  showSimpleFooter,
  summary,
  summaryId,
  hasParentChildRows,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);

  // If all column widths are using static sizing alter the table style to display inline.
  const makeInline = columnWidths && columnWidths.length ? columnWidths.every(width => !!width.static) : undefined;
  const hasEndNodes = headerNode || footerNode || showSimpleFooter;

  const tableClasses = classNames(
    cx(
      'table',
      { fill },
      { 'is-inline': makeInline },
      { outer: !hasEndNodes },
      theme.className,
    ),
    customProps.className,
  );

  //const tempArray = bodyData.map(section => section.parentRow !== undefined);
  //const hasParentChildRows = bodyData.map(section => section.parentRow != undefined).includes(true);
  const tableData = {
    headerData,
    bodyData,
    columnWidths,
    rowStyle,
    checkStyle,
    hasChevrons,
    dividerStyle,
    numberOfColumns,
    hasParentChildRows,
  };
  const { rowCount, header, sections } = unpackTableData(tableData);

  const attrSpread = cellPaddingStyle ? { 'data-table-padding': cellPaddingStyle } : {};

  const rows = (
    <div
      {...customProps}
      {...attrSpread}
      className={tableClasses}
      role="grid"
      aria-rowcount={numberOfRows || rowCount}
      aria-describedby={summaryId}
    >
      <VisuallyHiddenText id={summaryId} text={summary} />
      {header}
      {sections ? (
        /* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */
        <div className={cx(['body'])} role="rowgroup" ref={scrollRefCallback} tabIndex={fill ? 0 : undefined}>
          {sections}
        </div>
      ) : undefined}
    </div>
  );

  if (!hasEndNodes) {
    return rows;
  }

  const footerElement = [];
  if (footerNode) {
    footerElement.push(footerNode);
  }
  if (showSimpleFooter) {
    footerElement.push(<div className={cx('simple-footer')} />);
  }

  return (
    <ContentContainer
      fill={fill}
      footer={footerElement}
      header={headerNode}
      className={cx(
        'outer',
      )}
    >
      {rows}
    </ContentContainer>
  );
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
