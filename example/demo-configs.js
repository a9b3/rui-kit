export default [
  {
    header: 'Components',
    items : [
      require('./demos/code.js').default,
      require('./demos/button.js').default,
      require('./demos/loading.js').default,
      require('./demos/loading-overlay.js').default,
      require('./demos/left-middle-right.js').default,
      require('./demos/row.js').default,
      require('./demos/sidebar.js').default,
      require('./demos/dropdown.js').default,
      require('./demos/dropfile.js').default,
      require('./demos/truncate-text.js').default,
      require('./demos/form.js').default,
    ],
  },
  {
    header: 'Themed Components',
    items : [
      require('./demos/app-shell.js').default,
      require('./demos/themed-form.js').default,
    ],
  },
]
