# Otodom lowest price test

## Installation
1. In project folder, run: ```npm install```
2. Run tests with ```npm run e2e ```

## Description

### Page Objects
Actual Pages are coded as `<DescriptiveName>Page`.

When a Page has many sections in it, it can be broken up into smaller Page Objects (PO).
Or in situations where a part of the page is reused on other pages, a common Page Object can be created.
Page Objects (PO) are named as `<DescriptiveName>PO`.

### Actions
`click<Action>()` methods are very singular and only do what they say, ie click.
Higher order functions such as `findCityByTyping()` will perform multiple actions.

### Specs
1. Should never reference css selectors eg. `await t.click('button[data-tracking="search"]');`
1. Should never reference Page Object items eg. `await t.click(OtodomHomePage.searchingFieldLabel);`
1. Should call actions eg. `await otodomHome.findCityByTyping('Warszawa', 'Warszawa, mazowieckie');`
