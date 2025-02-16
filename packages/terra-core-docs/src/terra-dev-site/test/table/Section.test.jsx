import React from 'react';
import Table from 'terra-table';

const SectionTest = () => (
  <Table
    summaryId="section-table"
    summary="This table displays section grouping."
    numberOfColumns={1}
    bodyData={[
      {
        rows: [
          {
            key: 'row-1',
            cells: [
              {
                key: 'cell-1',
                children: [
                  <div key="cell-1">Amy3EditedInVsCode olor</div>,
                ],
              },
            ],
          },
        ],
        sectionHeader: {
          title: 'Default Amy3TestEditedInVsCode Section',
          id: 'default-id',
          key: 'default',
        },
        rows: [
          {
            key: 'row-0',
            cells: [
              {
                key: 'cell-0',
                children: [
                  <div key="cell-0">Lorem ipsum dolor</div>,
                ],
              },
            ],
          },
        ],
      },
      {
        sectionHeader: {
          title: 'Collapsible Section',
          id: 'collapsible-id',
          key: 'collapsible',
          onToggle: () => {},
        },
        rows: [
          {
            key: 'row-0',
            cells: [
              {
                key: 'cell-0',
                children: [
                  <div key="cell-0">Lorem ipsum dolor</div>,
                ],
              },
            ],
          },
        ],
      },
      {
        sectionHeader: {
          title: 'Collapsed Section',
          id: 'collapsed-id',
          key: 'collapsed',
          onToggle: () => {},
          isCollapsed: true,
        },
        rows: [
          {
            key: 'row-0',
            cells: [
              {
                key: 'cell-0',
                children: [
                  <div key="cell-0">Lorem ipsum dolor</div>,
                ],
              },
            ],
          },
        ],
      },
    ]}
  />
);

export default SectionTest;
