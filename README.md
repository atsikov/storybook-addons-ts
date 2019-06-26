# storybook-addons-ts
Repro for issue with importing TS modules into storybook's addons.ts (https://github.com/storybookjs/storybook/issues/7196)

# Steps
Run `yarn storybook`.
At the end of build webpack will fail with the following:
```
ModuleNotFoundError: Module not found: Error: Can't resolve './addon-customPanel/register' in '/Users/atsikov/Documents/storybook-addons-ts/.storybook'
    at factory.create (/Users/atsikov/Documents/storybook-addons-ts/node_modules/webpack/lib/Compilation.js:821:10)
    at factory (/Users/atsikov/Documents/storybook-addons-ts/node_modules/webpack/lib/NormalModuleFactory.js:397:22)
    at resolver (/Users/atsikov/Documents/storybook-addons-ts/node_modules/webpack/lib/NormalModuleFactory.js:130:21)
    at asyncLib.parallel (/Users/atsikov/Documents/storybook-addons-ts/node_modules/webpack/lib/NormalModuleFactory.js:224:22)
    at /Users/atsikov/Documents/storybook-addons-ts/node_modules/neo-async/async.js:2830:7
    at /Users/atsikov/Documents/storybook-addons-ts/node_modules/neo-async/async.js:6877:13
    at normalResolver.resolve (/Users/atsikov/Documents/storybook-addons-ts/node_modules/webpack/lib/NormalModuleFactory.js:214:25)
    at doResolve (/Users/atsikov/Documents/storybook-addons-ts/node_modules/enhanced-resolve/lib/Resolver.js:184:12)
    at hook.callAsync (/Users/atsikov/Documents/storybook-addons-ts/node_modules/enhanced-resolve/lib/Resolver.js:238:5)
    at _fn0 (eval at create (/Users/atsikov/Documents/storybook-addons-ts/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)
    at resolver.doResolve (/Users/atsikov/Documents/storybook-addons-ts/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:37:5)
    at hook.callAsync (/Users/atsikov/Documents/storybook-addons-ts/node_modules/enhanced-resolve/lib/Resolver.js:238:5)
    at _fn0 (eval at create (/Users/atsikov/Documents/storybook-addons-ts/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:15:1)
    at hook.callAsync (/Users/atsikov/Documents/storybook-addons-ts/node_modules/enhanced-resolve/lib/Resolver.js:238:5)
    at _fn0 (eval at create (/Users/atsikov/Documents/storybook-addons-ts/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:27:1)
    at resolver.doResolve (/Users/atsikov/Documents/storybook-addons-ts/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:42:38)
resolve './addon-customPanel/register' in '/Users/atsikov/Documents/storybook-addons-ts/.storybook'
  using description file: /Users/atsikov/Documents/storybook-addons-ts/package.json (relative path: ./.storybook)
    Field 'browser' doesn't contain a valid alias configuration
    using description file: /Users/atsikov/Documents/storybook-addons-ts/package.json (relative path: ./.storybook/addon-customPanel/register)
      no extension
        Field 'browser' doesn't contain a valid alias configuration
        /Users/atsikov/Documents/storybook-addons-ts/.storybook/addon-customPanel/register doesn't exist
      .mjs
        Field 'browser' doesn't contain a valid alias configuration
        /Users/atsikov/Documents/storybook-addons-ts/.storybook/addon-customPanel/register.mjs doesn't exist
      .js
        Field 'browser' doesn't contain a valid alias configuration
        /Users/atsikov/Documents/storybook-addons-ts/.storybook/addon-customPanel/register.js doesn't exist
      .jsx
        Field 'browser' doesn't contain a valid alias configuration
        /Users/atsikov/Documents/storybook-addons-ts/.storybook/addon-customPanel/register.jsx doesn't exist
      .json
        Field 'browser' doesn't contain a valid alias configuration
        /Users/atsikov/Documents/storybook-addons-ts/.storybook/addon-customPanel/register.json doesn't exist
      as directory
        /Users/atsikov/Documents/storybook-addons-ts/.storybook/addon-customPanel/register doesn't exist
```
