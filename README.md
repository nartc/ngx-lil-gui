# ngx-lil-gui

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

A [lil-gui](https://lil-gui.georgealways.com/) wrapper for [Angular](https://angular.io)

## Installation

    npm install ngx-lil-gui lil-gui

## Usage

Add `NgxLilGuiModule` to your module imports which will expose 3 components

```ts
@NgModule({
  imports: [NgxLilGuiModule],
})
export class SomeModule {}
```

### `ngx-lil-gui`

This wraps a [`GUI`](https://lil-gui.georgealways.com/#GUI) instance. There are 3 ways to use `ngx-lil-gui`:

1. `ngx-lil-gui`: This acts as a grouping folder with no **immediate** controllers underneath it.
2. `ngx-lil-gui[config]`: You can pass a `NgxLilGuiConfig` object to the `ngx-lil-gui` component and the controllers will be built based on the config.
3. `ngx-lil-gui[object]`: Build the GUI declaratively on the template. `[object]` is the object that this GUI controls.

#### Nested GUI

You can nest `ngx-lil-gui` and it will create a folder structure for you.

```html
<div #divElement>
  <span #spanElement></span>
</div>

<ngx-lil-gui title="Group">
  <ngx-lil-gui title="DIV" [object]="divElement.style"></ngx-lil-gui>
  <ngx-lil-gui title="SPAN" [object]="spanElement.style"></ngx-lil-gui>
</ngx-lil-gui>
```

### `ngx-lil-gui-controller`

This wraps a [`Controller`](https://lil-gui.georgealways.com/#Controller).

```html
<div #divElement></div>

<ngx-lil-gui title="DIV" [object]="divElement.style">
  <ngx-lil-gui-controller
    property="display"
    [controllerConfig]="{collection: ['block', 'flex', 'inline-flex']}"
  ></ngx-lil-gui-controller>
</ngx-lil-gui>
```

### `ngx-lil-gui-color`

This wraps a [`Controller`](https://lil-gui.georgealways.com/#Controller) as well. It will display a color picker.

```html
<div #divElement></div>

<ngx-lil-gui title="DIV" [object]="divElement.style">
  <ngx-lil-gui-color property="backgroundColor"></ngx-lil-gui-color>
</ngx-lil-gui>
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://nartc.me/"><img src="https://avatars.githubusercontent.com/u/25516557?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Chau Tran</b></sub></a><br /><a href="https://github.com/nartc/ngx-lil-gui/commits?author=nartc" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
