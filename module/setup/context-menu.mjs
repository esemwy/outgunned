export class OutgunnedContextMenu extends foundry.applications.ux.ContextMenu.implementation
{
  constructor(element, selector, menuItems, options = {}) {
    if (element?.jquery) element = element[0];
    options.jQuery ??= false;
    super(element, selector, menuItems, options);
  }

    /** @inheritdoc */
  static create(app, element, selector, items, { hookName = "EntryContext", ...options } = {}) {
    if (element?.jquery) element = element[0];
    options.jQuery ??= false;
    options.fixed ??= true;
    app._callHooks?.(className => `get${className}${hookName}`, items);
    return new this(element, selector, items, options);
  }

}