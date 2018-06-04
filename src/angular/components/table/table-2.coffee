angular.module('Picatic.Components').controller('Table2DemoController', [ () ->
  self = this
  self.rows = [
    {
      col: 'col1'
      name: 'Col 1'
    }
    {
      col: 'col2'
      name: 'Col 2'
    }
    {
      col: 'col3'
      name: 'Col 3'
    }
    {
      col: 'col4'
      name: 'Col 4'
    }
    {
      col: 'col5'
      name: 'Col 5'
    }
    {
      col: 'col6'
      name: 'Col 6'
    }
    {
      col: 'col7'
      name: 'Col 7'
    }
    {
      col: 'col8'
      name: 'Col 8'
    }
  ]
  self.sortSettings =
    field: null
    asc: false

  self.sort = (field) ->
    if field is self.sortSettings.field
      self.sortSettings.asc = !self.sortSettings.asc
    else
      self.sortSettings.field = field
      self.sortSettings.asc = false
    return

  self.tableHeaderClass = (field) ->
    cellClass = []
    if field is self.sortSettings.field
      cellClass.push('th-sort-active')
      if self.sortSettings.asc
        cellClass.push('th-sort-asc')
      else
        cellClass.push('th-sort-desc')
    return cellClass.join(' ')

  return
])
