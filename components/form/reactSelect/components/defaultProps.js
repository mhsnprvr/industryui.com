export const reactSelectDefaultProps = defaultStyles => ({
  backspaceRemovesValue: true,
  closeMenuOnSelect: true,
  closeMenuOnScroll: false,
  components: {},
  controlShouldRenderValue: true,
  defaultValue: undefined,
  escapeClearsValue: false,
  isDisabled: false,
  isLoading: false,
  isMulti: false,
  isRtl: false,
  isSearchable: true,
  loadingMessage: () => 'Loading...',
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuPlacement: 'bottom',
  menuPosition: 'absolute',
  menuShouldBlockScroll: false,
  noOptionsMessage: () => 'No options',
  openMenuOnFocus: false,
  openMenuOnClick: true,
  options: [],
  pageSize: 5,
  placeholder: 'Select...',
  screenReaderStatus: ({ count }) => `${count} result${count !== 1 ? 's' : ''} available`,
  styles: defaultStyles,
  tabIndex: '0',
  tabSelectsValue: true
})
