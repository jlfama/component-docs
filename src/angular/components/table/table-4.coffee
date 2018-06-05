angular.module('Picatic.Components').controller('Table4DemoController', [ () ->
  self = this
  self.people = [
    {
      name: 'Aiden Keller'
      img: 'img/aiden.jpg'
      id: '1476781'
      email: 'aiden@gmail.com'
      amount: '476.50'
      method: 'card'
      status: 'paid'
      attendees: 4
      created: '2017-04-18'
    }
    {
      name: 'Tillie Fleming'
      img: 'img/tillie.jpg'
      id: '1476780'
      email: 'tillie@gmail.com'
      amount: '200'
      method: 'card'
      status: 'paid'
      attendees: 1
      created: '2017-04-17'
    }
    {
      name: 'Allie Reyes'
      img: 'img/allie.jpg'
      id: '1476779'
      email: 'allie@gmail.com'
      amount: '400'
      method: 'invoice'
      status: 'unpaid'
      attendees: 4
      created: '2017-04-16'
    }
    {
      name: 'Leon Larson'
      img: 'img/leon.jpg'
      id: '1476778'
      email: 'leon@gmail.com'
      amount: '100'
      method: 'card'
      status: 'paid'
      attendees: 3
      created: '2017-04-15'
    }
    {
      name: 'Steven Allen'
      img: 'img/steven.jpg'
      id: '1476777'
      email: 'steven@gmail.com'
      amount: '0'
      method: 'card'
      status: 'paid'
      attendees: 4
      created: '2017-04-14'
    }
  ]
  self.sortSettings =
    field: 'id'
    asc: false
  self.searchFilter = undefined

  self.updateSearch = (result) ->
    console.log result
    self.searchFilter = result
    return

  self.formClear = () ->
    self.searchFilter = undefined
    return

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
