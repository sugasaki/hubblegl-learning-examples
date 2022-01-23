on [deck.gl](http://deck.gl) website.

![](./standalone.gif)

### Installation

```bash
# do this once per example
yarn
# To run the example
yarn start-local
```

ルートの module を使う場合にはソースの改変が必要
example の standalone を動作するには必要ではあるが、本リポジトリでは、`/examples/standalone/index.js`の該当部分を `import \* as hubble from 'hubble.gl';` に変更しているので、ここの階層ソースを不要としている。

必要になった場合には以下のコードを使うこと
https://github.com/visgl/hubble.gl/tree/master/modules
