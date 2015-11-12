# reflect-to-canvas

> Reflect your image to canvas

![](https://cloud.githubusercontent.com/assets/124117/11131304/6699ec2a-89cd-11e5-823d-1d434c90d02b.png)

## Install

```
$ npm install --save reflect-to-canvas
```


## Usage

```js
document.querySelector('#srcImg').reflectToCanvas(document.querySelector('#reflect'), {
	reflection: 0.5
});
```

## Options

- reflection: 0 ~ 1, value of reflection of target image reflected
- width [optional]: width of target image reflected. default is width of src
- height [optional]: height of target image reflected. default is height of src

## License

MIT © [ragingwind](http://ragingwind.me)
