(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 300,
	fps: 24,
	color: "#CCCCCC",
	manifest: [
		{src:"images/baks.png", id:"baks"},
		{src:"images/bonus.png", id:"bonus"},
		{src:"images/coin.png", id:"coin"},
		{src:"images/fon.jpg", id:"fon"},
		{src:"images/girl1.png", id:"girl1"}
	]
};



// symbols:



(lib.baks = function() {
	this.initialize(img.baks);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,256);


(lib.bonus = function() {
	this.initialize(img.bonus);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,103);


(lib.coin = function() {
	this.initialize(img.coin);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,110,119);


(lib.fon = function() {
	this.initialize(img.fon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,300);


(lib.girl1 = function() {
	this.initialize(img.girl1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,256,289);


(lib.Символ59 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#000000","#FFFFFF"],[0,1],0,-50,0,50).s().p("AwIE9Qh1AAAAh1IAAmPQAAh1B1AAMAgRAAAQB1AAAAB1IAAGPQAAB1h1AAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115,-31.7,230,63.5);


(lib.Символ56 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.baks();
	this.instance.setTransform(-146.5,-128);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-146.5,-128,293,256);


(lib.Символ54 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("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");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124.5,-15.5,249.1,31);


(lib.Символ53 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AEMCBIgEgnIhvAAIgEAnIgcAAIAAhLIATAAIAFgQQAFgMADgVQAEgVADggQACgWAAg3IBvAAIAACzIAWAAIAABLgADAABQgGAlgGAQIA2AAIAAiPIgjAAQgBA3gGAjgAjCBaIgNgCIAAjVIByAAIAAAkIhLAAIAAAvIALgCIANAAQAOAAANADQALADAIAJQAJAHAEANQAFAKAAATQAAAkgSATQgJAJgOAFQgOAEgRAAgAihgJIgHABIAABBIASACQANgBAIgHQAIgIAAgUQAAgLgDgHQgCgFgEgEQgEgEgGgBIgMgBgAroBbIgNgDIAAjVIAnAAIAABOIAJgCIANgBQANAAALAEQALACAJAIQAJAIAFANQAEAOAAASQAAAngRASQgJAKgOAFQgOAEgTAAgArOgLIAABCIAOACQAHAAAFgCQAGgCADgFQAFgEACgHQACgHAAgLQAAgKgCgHQgDgFgEgEQgDgEgGgCIgMgBgAOdBaIAAhuIADgqIgBAAIgLAmIgjBKIgOAAIglhLIgLglIgCAAIAFAqIAABuIglAAIAAjXIAmAAIAtBeIAHAbIACAAIAHgcIAqhdIAlAAIAADXgALPBaIAAhyIACgeIgBAAIgLAgIg+BwIgfAAIAAjXIAnAAIAAByIgEAdIACAAIAMggIA+hvIAeAAIAADXgAHUBaIAAjVIA0gFQAOAAAOADQAOACALAIQAKAHAHAOQAEAIABAJQACAJAAAMQgCAZgEAJQgFAOgLAIQgJAJgMADQgNAFgNAAIgQgBIgFgBIAABLgAH7hcIAABLIAPABQAGAAAGgCQAGgCAGgFQAFgEACgIQADgHAAgNQAAgKgDgHQgCgHgFgFQgEgDgGgCQgGgCgHgBQgKAAgGACgAGeBaIgNgxIgzAAIgMAxIgoAAIA/jYIAfAAIBADYgAGLAIIgShSIgBAAIgRBSIAkAAgAg8BaIAAjXIBrAAIAAAkIhDAAIAAA1IA9AAIAAAkIg9AAIAAA2IBEAAIAAAkgAlUBaIAAjXIBsAAIAAAkIhFAAIAAA1IA/AAIAAAkIg/AAIAAA2IBGAAIAAAkgAm/BaIAAizIgzAAIAAgkICOAAIAAAkIgzAAIAACzgAppBaIAAjXIAnAAIAADXgAs4BaIAAhuIAFgqIgCAAIgMAmIgjBKIgNAAIglhLIgLglIgDAAIAGAqIAABuIgkAAIAAjXIAlAAIAtBeIAIAbIABAAIAHgcIArhdIAlAAIAADXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.4,-12.9,192.8,25.9);


(lib.Символ51 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AEMCBIgEgnIhvAAIgEAnIgcAAIAAhLIATAAIAFgQQAFgMADgVQAEgVADggQACgWAAg3IBvAAIAACzIAWAAIAABLgADAABQgGAlgGAQIA2AAIAAiPIgjAAQgBA3gGAjgAjCBaIgNgCIAAjVIByAAIAAAkIhLAAIAAAvIALgCIANAAQAOAAANADQALADAIAJQAJAHAEANQAFAKAAATQAAAkgSATQgJAJgOAFQgOAEgRAAgAihgJIgHABIAABBIASACQANgBAIgHQAIgIAAgUQAAgLgDgHQgCgFgEgEQgEgEgGgBIgMgBgAroBbIgNgDIAAjVIAnAAIAABOIAJgCIANgBQANAAALAEQALACAJAIQAJAIAFANQAEAOAAASQAAAngRASQgJAKgOAFQgOAEgTAAgArOgLIAABCIAOACQAHAAAFgCQAGgCADgFQAFgEACgHQACgHAAgLQAAgKgCgHQgDgFgEgEQgDgEgGgCIgMgBgAOdBaIAAhuIADgqIgBAAIgLAmIgjBKIgOAAIglhLIgLglIgCAAIAFAqIAABuIglAAIAAjXIAmAAIAtBeIAHAbIACAAIAHgcIAqhdIAlAAIAADXgALPBaIAAhyIACgeIgBAAIgLAgIg+BwIgfAAIAAjXIAnAAIAAByIgEAdIACAAIAMggIA+hvIAeAAIAADXgAHUBaIAAjVIA0gFQAOAAAOADQAOACALAIQAKAHAHAOQAEAIABAJQACAJAAAMQgCAZgEAJQgFAOgLAIQgJAJgMADQgNAFgNAAIgQgBIgFgBIAABLgAH7hcIAABLIAPABQAGAAAGgCQAGgCAGgFQAFgEACgIQADgHAAgNQAAgKgDgHQgCgHgFgFQgEgDgGgCQgGgCgHgBQgKAAgGACgAGeBaIgNgxIgzAAIgMAxIgoAAIA/jYIAfAAIBADYgAGLAIIgShSIgBAAIgRBSIAkAAgAg8BaIAAjXIBrAAIAAAkIhDAAIAAA1IA9AAIAAAkIg9AAIAAA2IBEAAIAAAkgAlUBaIAAjXIBsAAIAAAkIhFAAIAAA1IA/AAIAAAkIg/AAIAAA2IBGAAIAAAkgAm/BaIAAizIgzAAIAAgkICOAAIAAAkIgzAAIAACzgAppBaIAAjXIAnAAIAADXgAs4BaIAAhuIAFgqIgCAAIgMAmIgjBKIgNAAIglhLIgLglIgDAAIAGAqIAABuIgkAAIAAjXIAlAAIAtBeIAIAbIABAAIAHgcIArhdIAlAAIAADXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.4,-12.9,192.8,25.9);


(lib.Символ50 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcBtIAAhWIgRAGIggBQIgtAAIAjhJIAQgMQgRgGgLgPQgFgGgDgLQgCgLAAgOQgBgTAHgOQAFgOAKgIQALgHANgEQANgEARABIAKAAIAjAEIAADVgAAEhHQgEACgEAEQgEAEgCAHQgDAGAAALQAAAKADAHQACAHAEAEQAEAEAEADQAFACAIAAIALAAIAAhHIgFgBIgHAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-11,13.5,22);


(lib.Символ49 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOBrQgOgGgMgNQgKgOgGgVQgEgMgBgNIgBgcQgBgfAIgWQADgLAFgJQAEgIAGgHQALgNAPgFQANgGAOAAQAPAAAMADIASAFIgHAjQgGgDgJgBQgHgCgLgBQgLABgIAEQgGAFgGAJQgMATAAAmQAAAQADAOQACAOAHALQAFAKAHAGQAJAGAMAAQALgBAIgDIAOgHIAHAhQgHAHgOADQgOAEgNAAQgPgBgOgFg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.4,-11.3,12.8,22.6);


(lib.Символ48 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBsIAAizIg0AAIAAgkICNAAIAAAkIg0AAIAACzg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.1,-10.8,14.2,21.7);


(lib.Символ47 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1BsIAAjXIBqAAIAAAkIhDAAIAAA1IA9AAIAAAjIg9AAIAAA3IBEAAIAAAkg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.4,-10.8,11,21.7);


(lib.Символ46 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlBtIgNgyIgyAAIgMAyIgnAAIA/jZIAdAAIA/DZgAARAbIgRhSIAAAAIgRBSIAiAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.8,-10.9,15.7,21.9);


(lib.Символ45 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaBsIAAhYQgGAFgLAEQgJAEgPAAQgKAAgJgEQgJgDgHgGQgGgHgEgLQgEgIAAgRIAAhUIAnAAIAABHQAAAUAFAIQAGAIANAAQAHAAAIgDQAHgCAFgGIAAhgIAnAAIAADXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.5,-10.8,13.2,21.7);


(lib.Символ44 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkBsQgHgCgGgFIAJggIAIADIAHABQAMAAAFgXIhEieIAvAAIAfBeIAFAcIABAAIAEgdIAYhdIApAAIg7CzQgFAMgGAJQgGAJgFAEQgIAEgKAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.7,-10.9,15.4,21.9);


(lib.Символ43 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhABsIgJgDIAEgjQAFACAGgCQAGgDADgHQAEgHADgOQADgNACgUIAEhyIBrAAIAADXIgnAAIAAizIghAAQgCA7gBAmQgCATgEAPQgEAQgFAJQgDAIgFAFIgKAIIgKADIgJABg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.5,-10.9,15,21.9);


(lib.Символ42 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBpQgOgJgJgOQgHgKgHgaQgEgVAAgZQAAgaAFgVQAEgVAKgOQATgdAlgBQATABAPAHQAHAEAGAGQAGAGAFAHQAJAPAFAVQAEAeAAAPQAAAbgFAVQgFAVgJAOQgUAdglABQgTgBgPgHgAgiAAQAAAQACAOQABAOAFAKQAEAKAHAHQAGAFAJABQAIAAAHgFQAHgFAEgJQAJgSAAgoQAAgOgCgOQgBgOgFgLQgEgKgHgHQgGgFgKgBQgiAAAABMg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.6,-11.3,15.4,22.6);


(lib.Символ41 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcBsIAAizIg3AAIAACzIgnAAIAAjXICFAAIAADXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-10.8,13.5,21.7);


(lib.Символ40 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBpQgOgJgJgOQgHgKgHgaQgEgVAAgZQAAgaAFgVQAEgVAKgOQATgdAlgBQATABAPAHQAHAEAGAGQAGAGAFAHQAJAPAFAVQAEAeAAAPQAAAbgFAVQgFAVgJAOQgUAdglABQgTgBgPgHgAgiAAQAAAQACAOQABAOAFAKQAEAKAHAHQAGAFAJABQAIAAAHgFQAHgFAEgJQAJgSAAgoQAAgOgCgOQgBgOgFgLQgEgKgHgHQgGgFgKgBQgiAAAABMg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.6,-11.3,15.4,22.6);


(lib.Символ39 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdBsIAAhbIg5AAIAABbIgnAAIAAjXIAnAAIAABZIA5AAIAAhZIAnAAIAADXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.8,-10.8,13.7,21.7);


(lib.Символ38 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaBsIAAhYQgGAFgLAEQgJAEgPAAQgKAAgJgEQgJgDgHgGQgGgHgEgLQgEgIAAgRIAAhUIAnAAIAABHQAAAUAFAIQAGAIANAAQAHAAAIgDQAHgCAFgGIAAhgIAnAAIAADXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.6,-10.8,13.2,21.7);


(lib.Символ37 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfBsIAAhyIADgeIgBAAIgMAgIg8BwIgeAAIAAjXIAnAAIAABwIgEAfIACAAIAMgiIA8htIAeAAIAADXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.1,-10.8,14.2,21.7);


(lib.Символ36 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhABsIgJgDIAEgjQAFACAGgCQAGgDADgHQAEgHADgOQADgNACgUIAEhyIBrAAIAADXIgnAAIAAizIghAAQgCA7gBAmQgCATgEAPQgEAQgFAJQgDAIgFAFIgKAIIgKADIgJABg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.5,-10.9,15,21.9);


(lib.Символ35 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBsIAAizIg0AAIAAgkICNAAIAAAkIg0AAIAACzg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.1,-10.8,14.2,21.7);


(lib.Символ34 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgiBpQgOgJgJgOQgHgKgHgaQgEgVAAgZQAAgaAFgVQAEgVAKgOQATgdAlgBQATABAPAHQAHAEAGAGQAGAGAFAHQAJAPAFAVQAEAeAAAPQAAAbgFAVQgFAVgJAOQgUAdglABQgTgBgPgHgAgiAAQAAAQACAOQABAOAFAKQAEAKAHAHQAGAFAJABQAIAAAHgFQAHgFAEgJQAJgSAAgoQAAgOgCgOQgBgOgFgLQgEgKgHgHQgGgFgKgBQgiAAAABMg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.7,-11.3,15.4,22.6);


(lib.Символ33 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAcBtIAAhWIgRAGIggBQIgtAAIAjhJIAQgMQgRgGgLgPQgFgGgDgLQgCgLAAgOQgBgTAHgOQAFgOAKgIQALgHANgEQANgEARABIAXABIAWADIAADVgAAEhHQgEACgEAEQgEAEgCAHQgDAGAAALQAAAKADAHQACAHAEAEQAEAEAEADQAFACAIAAIALAAIAAhHIgFgBIgHAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-11,13.5,22);


(lib.Символ32 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxBrIgNgCIAAjVIBwAAIAAAkIhJAAIAAAuIALgBIAMgBQAOAAAMADQAMAEAHAIQAJAHAFAMQAEAMAAASQAAAlgSASQgKAKgNAEQgOAFgQgBgAgQAFIgHACIAABCIASACQAMAAAHgIQAIgIAAgUQAAgLgDgHQgCgGgEgFQgFgDgFgBIgLgBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.3,-11,12.7,22);


(lib.Символ31 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag1BsIAAjXIBqAAIAAAkIhDAAIAAA1IA9AAIAAAjIg9AAIAAA3IBEAAIAAAkg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.5,-10.8,11,21.7);


(lib.Символ30 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSBsIAAizIg0AAIAAgkICNAAIAAAkIg0AAIAACzg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.1,-10.8,14.2,21.7);


(lib.Символ29 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkBsQgHgCgGgFIAJggIAIADIAHABQAMAAAFgXIhEieIAvAAIAfBeIAFAcIABAAIAEgdIAYhdIApAAIg7CzQgFAMgGAJQgGAJgFAEQgIAEgKAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.7,-10.9,15.4,21.9);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgHAPIgDgBIgBgOQABgPAKABQALABABANIgBANQgCADgJAAIgHgBg");
	this.shape.setTransform(37.4,147.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHALIgCgBQgBgBAAgJIABgMQAIAAAFAHQAGAFABAEIgCAGQgDACgGAAIgHgBg");
	this.shape_1.setTransform(24.2,149.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAEQgGgIAAgCQAAgLAMAEQANAEABALQAAAKgBAAIgCACQgCABgFAAQgEAAgGgLg");
	this.shape_2.setTransform(12.8,149.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},13).to({state:[{t:this.shape_1}]},2).to({state:[{t:this.shape_2}]},2).to({state:[]},2).wait(7));

	// Слой 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfABQABgPAegJQAfgJABAfQAAAbgtAAQgPAAgDgZg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAJQgCgGACgDQAAgdAaAJQAcAIAAARQAAAIgFAEQgHAGgSAAQgUAAgEgOg");
	this.shape_4.setTransform(-0.2,4.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWALIgCgNQAAgOAYgHQAZgHAAAhQAAAIgFAGQgJAIgMAAQgPAAgGgOg");
	this.shape_5.setTransform(-0.4,10.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3}]}).to({state:[{t:this.shape_4}]},2).to({state:[{t:this.shape_5}]},3).to({state:[]},3).to({state:[]},15).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.2,-2.6,6.4,5.3);


(lib.Символ24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ACKAaQgIgFgPAAQgNAAgEgFQgCgDABgDQAAgKApgKQApgKABAbQgBANgBADQgDAIgPAAQgPAAgHgFgAipAIQgKgEAAgMQABgGABgDQADgFAIAAQAJAAAGAHQAFAIAHAAQAYAAAFgLQAFgLAJgBQAcAHAHAIQACADAAALQAAAIgBADQgCAGgJAAQhMAAgWgIg");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-3.1,36,6.3);


(lib.Символ23 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AO+BrQgPgGgLgNQgKgOgHgVQgDgMgBgNIgCgcQAAgfAHgWIAIgUQAFgIAFgHQAMgNAOgFQAPgGAPAAQAPAAALADIATAFIgIAjQgGgDgIgBQgIgCgKgBQgLABgIAEQgJAFgFAJQgMATAAAmQAAAQADAOQACAOAGALQAGAKAJAGQAJAGAMAAQALgBAIgDIAOgHIAHAhQgIAHgNADQgOAEgNAAQgRgBgOgFgAHUBpQgOgJgKgOQgGgKgHgaQgFgVAAgZQAAgaAFgVQAFgVAJgOQATgdAngBQAUABAPAHQAHAEAGAGQAGAGAEAHQAKAPAEAVQAFAeAAAPQAAAbgFAVQgFAVgKAOQgTAdgmABQgVgBgOgHgAHTAAQAAAQACAOQACAOAEAKQAFAKAGAHQAHAFAKABQAJAAAHgFQAGgFAFgJQAJgSAAgoQAAgOgCgOQgCgOgEgLQgEgKgHgHQgHgFgKgBQgkAAAABMgAtGBpQgOgJgJgOQgHgKgHgaQgEgVAAgZQAAgaAFgVQAEgVAKgOQATgdAmgBQAUABAPAHQAHAEAGAGQAGAGAFAHQAJAPAFAVQAEAeAAAPQAAAbgFAVQgFAVgJAOQgUAdgmABQgUgBgPgHgAtGAAQAAAQACAOQABAOAFAKQAEAKAHAHQAGAFAKABQAJAAAHgFQAHgFAEgJQAJgSAAgoQAAgOgCgOQgBgOgFgLQgEgKgHgHQgGgFgLgBQgjAAAABMgAEpBsIgNgCIAAjVIByAAIAAAkIhLAAIAAAvIALgCIANAAQAOAAAMADQAMADAIAJQAJAHAEALQAFAMAAATQAAAkgSATQgKAJgNAFQgOAEgSAAgAFKAHIgHABIAABDIASACQANgBAIgHQAIgIAAgUQAAgLgDgHQgCgHgEgEQgFgEgFgBIgNgBgABXBtIgOgDIAAjVIAnAAIAABOIALgCIAOgBQANAAAMAEQALADAJAHQAJAIAFALQAFAOAAAVQAAATgFAOQgEAOgJAJQgSATgnAAgABwAFIAABEIAQACQAPAAAIgIQAJgJAAgVQAAgLgDgGQgCgHgEgEQgEgEgGgCIgNgBgAMVBsQgGgBgGgFIAJggIAIADIAHABQAMAAAEgXIhDieIAuAAIAiBeIAEAcIACAAIAEgdIAYhdIAoAAIg6CyQgFANgGAJQgGAJgHAEQgIAEgKAAgAoJBsQgGgBgHgFIAKggIAIADIAHABQALAAAFgXIhDieIAuAAIAhBeIAFAcIABAAIAEgdIAZhdIAoAAIg7CyQgFANgGAJQgGAJgHAEQgHAEgLAAgArIBtIgJgDIAEgjQAGABAGgBQAFgDAEgHQAEgHACgNQADgOACgUIAFhyIBtAAIAADXIgnAAIAAizIghAAQgCA7gEAmQgCATgDAPQgEAPgFALQgEAHgFAFIgJAIIgKADIgJABgAK8BsIAAhbIg7AAIAABbIgnAAIAAjXIAnAAIAABZIA7AAIAAhZIAnAAIAADXgAgfBsIAAizIg0AAIAAgkICMAAIAAAkIgzAAIAACzgAiKBsIAAhyIADgeIgCAAIgLAgIg+BwIgfAAIAAjXIAnAAIAABwIgDAfIABAAIANgiIA9htIAfAAIAADXgAkzBsIAAhYQgHAFgLAEQgKAEgPAAQgLAAgJgEQgJgDgGgGQgHgHgEgLQgEgIAAgRIAAhUIAnAAIAABHQAAAUAGAIQAFAIANAAQAJAAAIgDQAIgCAFgGIAAhgIAnAAIAADXgAutBsIAAizIg4AAIAACzIgnAAIAAjXICGAAIAADXg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-103.8,-11.3,207.6,22.6);


(lib.Символ21 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFCC").s().p("AoqJYIMKyvIFLAAIsKSvg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55.5,-60,111.1,120);


(lib.Символ18 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.bonus();
	this.instance.setTransform(-112.5,-51.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.5,-51.5,225,103);


(lib.Символ17 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.fon();
	this.instance.setTransform(-300,-150);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


(lib.Символ14 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FBB732","#B22629"],[0,1],0,40,0,-40).s().p("AwIErQh1ABAAh1IAAltQAAh1B1ABMAgRAAAQB1gBAAB1IAAFtQAAB1h1gBg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115,-30,230,60);


(lib.Символ9 = function() {
	this.initialize();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABnJWIgBAAIgBAAQgPgBgDgKIAAgDQibgeh5hLQhnhAgphHQgthDglg7Qg/hlgIgmQgUgegKhKQgHg/ABg/QAAj6DXh/QBLgtBJgMQAggGARACQAMgGAagCQB6ALByBOQAGgCAJADQAbAHAtAoQBqBeBoCvQAHATANBEQAeBKAFAzQAPAlAAAoQAACmgwBlQhWCyjsAtIgfAAIgGAFQgJAFgGAAIgCAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.7,-59.8,105.5,119.8);


(lib.Символ8 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.coin();
	this.instance.setTransform(-55,-59.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-55,-59.5,110,119);


(lib.Символ55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ54();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:1.2},0).wait(1).to({rotation:0},0).wait(1).to({rotation:-1.2},0).wait(1).to({rotation:0},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.5,-15.5,249.1,31);


(lib.Символ52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ53();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.06,scaleY:1.06,alpha:0.43},6,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14,alpha:1},8,cjs.Ease.get(1)).to({scaleX:1.08,scaleY:1.08,alpha:0.535},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,alpha:0},8,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ51();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.06,scaleY:1.06},6,cjs.Ease.get(-1)).to({scaleX:1.14,scaleY:1.14},8,cjs.Ease.get(1)).to({scaleX:1.08,scaleY:1.08},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.4,-12.9,192.8,25.9);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Символ 50
	this.instance = new lib.Символ50();
	this.instance.setTransform(171.5,-0.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({alpha:1},3).to({alpha:0},4).wait(14));

	// Символ 49
	this.instance_1 = new lib.Символ49();
	this.instance_1.setTransform(157.8,0);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({alpha:1},3).to({alpha:0},4).wait(15));

	// Символ 48
	this.instance_2 = new lib.Символ48();
	this.instance_2.setTransform(143.2,0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({alpha:1},3).to({alpha:0},4).wait(16));

	// Символ 47
	this.instance_3 = new lib.Символ47();
	this.instance_3.setTransform(129.4,0);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({alpha:1},3).to({alpha:0},4).wait(17));

	// Символ 46
	this.instance_4 = new lib.Символ46();
	this.instance_4.setTransform(114.8,0);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(20).to({alpha:1},3).to({alpha:0},4).wait(18));

	// Символ 45
	this.instance_5 = new lib.Символ45();
	this.instance_5.setTransform(99.1,0);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({alpha:1},3).to({alpha:0},4).wait(19));

	// Символ 44
	this.instance_6 = new lib.Символ44();
	this.instance_6.setTransform(84.2,0.1);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(18).to({alpha:1},3).to({alpha:0},4).wait(20));

	// Символ 43
	this.instance_7 = new lib.Символ43();
	this.instance_7.setTransform(67.9,0.1);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(17).to({alpha:1},3).to({alpha:0},4).wait(21));

	// Символ 42
	this.instance_8 = new lib.Символ42();
	this.instance_8.setTransform(52.2,0);
	this.instance_8.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(16).to({alpha:1},3).to({alpha:0},4).wait(22));

	// Символ 41
	this.instance_9 = new lib.Символ41();
	this.instance_9.setTransform(35.6,0);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(15).to({alpha:1},3).to({alpha:0},4).wait(23));

	// Символ 40
	this.instance_10 = new lib.Символ40();
	this.instance_10.setTransform(12.6,0);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(14).to({alpha:1},3).to({alpha:0},4).wait(24));

	// Символ 39
	this.instance_11 = new lib.Символ39();
	this.instance_11.setTransform(-4.2,0);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(13).to({alpha:1},3).to({alpha:0},4).wait(25));

	// Символ 38
	this.instance_12 = new lib.Символ38();
	this.instance_12.setTransform(-20.4,0);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(12).to({alpha:1},3).to({alpha:0},4).wait(26));

	// Символ 37
	this.instance_13 = new lib.Символ37();
	this.instance_13.setTransform(-36.5,0);
	this.instance_13.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10).to({alpha:1},3).to({alpha:0},4).wait(28));

	// Символ 36
	this.instance_14 = new lib.Символ36();
	this.instance_14.setTransform(-53.9,0.1);
	this.instance_14.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(9).to({alpha:1},3).to({alpha:0},4).wait(29));

	// Символ 35
	this.instance_15 = new lib.Символ35();
	this.instance_15.setTransform(-68.3,0);
	this.instance_15.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(8).to({alpha:1},3).to({alpha:0},4).wait(30));

	// Символ 34
	this.instance_16 = new lib.Символ34();
	this.instance_16.setTransform(-84.1,0);
	this.instance_16.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(7).to({alpha:1},3).to({alpha:0},4).wait(31));

	// Символ 33
	this.instance_17 = new lib.Символ33();
	this.instance_17.setTransform(-107.2,-0.1);
	this.instance_17.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(6).to({alpha:1},3).to({alpha:0},4).wait(32));

	// Символ 32
	this.instance_18 = new lib.Символ32();
	this.instance_18.setTransform(-121.1,0.2);
	this.instance_18.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(5).to({alpha:1},3).to({alpha:0},4).wait(33));

	// Символ 31
	this.instance_19 = new lib.Символ31();
	this.instance_19.setTransform(-135.3,0);
	this.instance_19.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(4).to({alpha:1},3).to({alpha:0},4).wait(34));

	// Символ 30
	this.instance_20 = new lib.Символ30();
	this.instance_20.setTransform(-149.5,0);
	this.instance_20.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(3).to({alpha:1},3).to({alpha:0},4).wait(35));

	// Символ 29
	this.instance_21 = new lib.Символ29();
	this.instance_21.setTransform(-170.5,0.1);
	this.instance_21.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(2).to({alpha:1},3).to({alpha:0},4).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-178.2,-11.3,356.5,22.6);


(lib.Символ22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ21();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:340,y:10},36).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.5,-60,111.1,120);


(lib.Символ19 = function() {
	this.initialize();

	// Слой 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AA4D3IgBgCIgMgBIAAgpQAIgLAAgPIAMABIAAgDIAegBQAUgwAJgaIAAgCIgEAAIgEgTIgCgGIgCAAIgOgnIgFAAIgrh7IgBgCIgZg+QgVgvACgcIADAAIAAgHQAJgCgDgCIA8gBQALAsAOAsQAUBDAOATIAAACIgFAAQAGAYAHAfIAHAiIAMAAIAPg8IAAgmIAIgnIAAgPIAMg4QAFghgCgWIAOAAIABgDIA5ABIAAAkQgHAHgFAJIAAAbIgUBFQgNApgLAbIgBADQgXBfgKAoQgNA4giAzQgIAPgOALgAg+D0IAAgCIghAAIAAjQIhkAAIAAADIgRAAIAACmIACAFIAAAiIhBAAIAAm7QgCgOAAgXIAeABIAAgBIAjABIAADHIB1ABIAAjMIAgABIABgBIAjABIAAHlgAGkDyIgCAAIgjAAQgygMgPgbIgFgNQgHgHgFgJQgDgGgFgPQgNgPgCgrQgBgWABgUQAAgjACgdQADAXAAAMIABALIABgXIgCAAIAAgwIgCAGIACgXIAAgTIADgGQAXifBUgJQA3ADAMAHQAMAIALACIAIABIAAALIgHAwIAEAJIAAABQgEACgJgFIgCAAIAAAAIgIgEIgMgGIgKAAIgCgDIgbAAQgSAOgJAJQgIAJgGALQgFAPgMAXQgKAXAAAUIAAABIAAATQABA1AIAqIAFAYQAUBLArgBIAAADIAIABQAEgBAZgGQAagHAFAAIAAADIAHAAIADAUQACAOAKAGIAAAMIgCgCQgFAIgMAGIgDADIgDAAQgUAJgjAIgAn1DnIgBAAQgzgKgYhAQgXg9AIhLIgDgeQAAhLASg4QAfhfBHAEIA8ACQAaAKASAdIAJASIAHAAQASAsAFA7QACAbAABLQAAA8gBAOQgDApgQAdIgDAAQgPAtgvAQQgfAAgBACIgRABQgcAAgJgKgAnYimQgiAMgHAkIgFAKIgHAgIgCALIgFAeIAABpQACAXAQAeIATAlQAPABAJAEQAMAEAMgBIAAgDIAUABIAAgMQAcgtAFgQQACgIAAgrQAAgwgFg3IgHg7IgJgQQgLgPgPgJIgEgDQgIgFgJAAQgGAAgGACgAI9DoIAAgCIgeAAIAAnGIAjACIAAACIAeABIAAClIBPACIAJAFIAJAAIACACQAeAIAOAlQAKAZAAAwQAAA2gMAfQgPAlgoAbIgcAAIAAAFIgFADIgNABQgOAAAAABgAJgCsIArABIACgDQAOgGATgUIAAgJQANgVACgJIAAgVQAAgXgEgUIgDgQIgLAAQAAgMgRgFQgPgFgrgDgAr3DdQgngFgUgJIgFgCIgiAAIAAlaQgHgOgGgXQAAgTAXgBQA1gCAjgJQBHgTAYARQAMAIAAAVQAAAegSADQgFAFgKAAQgDAAgHgCQgHgDgDgBQgJAAgZAGQgaAGgaAAIgLAAIAABkQAegBAGgDQAEgCAoADIAKADIAeABQAkAmAGAWQADAKAAA2QAAAxgIAbQgQA7gxAAQgvAAgCgBgAsiAaIAAB+IAHADQALAGACAAQA0AAAPguQAFgOABgSIgBgRQAAgLgKgNQgPgVgfAAQgWAAgOAFgANEDPIAAgCIgeAAIAAmUIAjACIAAAHIAeAAIAAGNg");
	mask.setTransform(-1,-1.1);

	// Слой 3
	this.instance = new lib.Символ22();
	this.instance.setTransform(-176.5,-20);
	this.instance.alpha = 0.969;

	this.instance.mask = mask;

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AwyEvIAApyQREi7QhCcIAAJ4QozCUowAAQoBAAoBh7gAAhDAIAAApIAMABIABACIA1AAQAOgLAIgQQAigyANg4QAKgoAXhfIABgDQALgbANgqIAUhEIAAgbQAFgJAHgHIAAgkIg5gBIgBADIgOgBQACAXgFAgIgMA5IAAAPIgIAmIAAAnIgPA8IgMAAIgHgiQgHgggGgXIAFAAIAAgCQgOgUgUhCQgOgsgLgsIg8ABQADACgHACIAAAGIgDAAQgCAdATAvIAZA9IABADIArB7IAFAAIAOAnIACAAIACAGIAEATIAEAAIAAACQgJAZgUAwIgeACIAAADIgMgBQAAAPgIALgAhpAXIAADQIAhAAIAAACIAjABIAAnlIgjgBIgBABIgggBIAADMIh1gBIAAjHIgjgCIAAACIgegCQAAAYACANIAAG8IBBAAIAAgiIgCgGIAAilIARAAIAAgDgAEMAqQgBATABAWQACAsANAPQAFAOADAHQAFAIAHAIIAFANQAPAbAyAMIAjAAIACAAIANAAQAjgIAUgJIADAAIADgDQAMgHAFgHIACABIAAgLQgKgGgCgOIgDgVIgHAAIAAgCQgFAAgaAHQgZAGgEAAIgIAAIAAgEQgrACgUhLIgFgZQgIgqgBg0IAAgTIAAgCQAAgUAKgWQAMgXAFgPQAGgLAIgJQAJgJASgOIAbAAIACADIAKAAIAMAGIAIAEIAAAAIACAAQAJAEAEgBIAAgBIgEgKIAHgvIAAgLIgIgBQgLgDgMgHQgMgHg3gDQhUAJgXCfIgDAGIAAATIgCAXIACgGIAAAwIACAAIgBAXIgBgMQAAgLgDgYQgCAeAAAjgApLiXQgSA4AABLIADAeQgIBLAXA9QAYBAAzAJIABABQALAMArgDQABgCAfgBQAvgPAPgtIADAAQAQgdADgpQABgOAAg8QAAhLgCgbQgFg7gSgsIgHAAIgJgTQgSgcgagLIg8gBIgFgBQhDAAgeBcgAIVDaIAeABIAAACIA9AAQAAgBAOgBIANAAIAFgDIAAgFIAcAAQAogbAPgmQAMgeAAg2QAAgwgKgZQgOglgegIIgCgCIgJAAIgJgFIhPgCIAAimIgegBIAAgBIgjgCgAsBjcQgjAJg1ACQgXABAAATQAGAXAHAOIAAFZIAiAAIAFADQAUAJAnAEQACACAvAAQAxAAAQg7QAIgbAAgyQAAg2gDgKQgGgTgkgoIgegCIgKgCQgogDgEACQgGADgeAAIAAhkIALAAQAaAAAagFQAZgGAJAAQADAAAHADQAHADADAAQAKAAAFgFQASgDAAgeQAAgWgMgIQgLgHgWAAQgYAAgmAKgAMcDBIAeABIAAACIAjAAIAAmNIgegBIAAgGIgjgCgAHrC/IABABIgBABIAAgCgAE1CvIAEAAIACAEIgGgEgAJWChIAAisQArAFAPAFQARADAAALIALAAIADAQQAEAVAAAWIAAAWQgCAJgNAVIAAAJQgTATgOAHIgCADgAnhCZQgJgDgPgBIgTglQgQgegCgXIAAhpIAFgfIACgKIAHggIAFgKQAHglAigLQARgGAMAJIAEADQAPAJALAPIAJAPIAHA8QAFA3AAAwQAAArgCAIQgFAQgcAtIAAALIgUAAIAAACIgGAAQgJAAgJgDgAslCQIgHgDIAAh+QAOgFAWAAQAfAAAPAVQAKANAAAKIABASQgBASgFAOQgPAug0AAQgCAAgLgGgAEWBdIABADIAAAFIgBgIgAFKhFIABgFIAAAIIgBgDgAFJhRIACgIIgBAGIAAACgAFVjXIAEgEIgDAEg");

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-107.5,-42.6,215.1,85.3);


(lib.Символ16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ17();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.17,scaleY:1.17},14,cjs.Ease.get(-0.95)).to({scaleX:1.37,scaleY:1.37},15,cjs.Ease.get(1)).to({scaleX:1.18,scaleY:1.18},15,cjs.Ease.get(-0.95)).to({scaleX:1,scaleY:1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-300,-150,600,300);


(lib.Символ15 = function() {
	this.initialize();

	// Слой 1 - копия
	this.instance = new lib.Символ14();

	// Слой 1
	this.instance_1 = new lib.Символ14();
	this.instance_1.setTransform(0,3.5,1,1,180);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115,-30,230,63.5);


(lib.Символ13 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ23();
	this.instance.setTransform(-1,0.8,0.79,0.79);

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A81E29").s().p("AL1BUQgLgFgJgKQgIgLgGgRIgDgTIgBgWQAAgZAFgRQADgJAEgGIAHgMQAKgLALgEQAMgEALAAQAMAAAJACIAPAEIgGAcQgFgDgGgBQgGgBgJAAQgIAAgHADQgGAEgFAHQgJAPAAAeQAAANACALQACALAFAIQAEAJAHAEQAHAFAKgBQAJABAGgDIALgGIAGAaQgGAFgLADQgLADgKAAQgOAAgLgFgAFyBTQgLgHgIgLQgFgIgGgUQgDgSAAgTQAAgUAEgRQADgRAIgLQAPgXAeAAQAQAAAMAGQAGADAEAFIAJAKQAHAMAEAQQADAYAAAMQAAAVgEARQgEAQgHAMQgQAXgeAAQgQAAgLgGgAFxAAQAAAMACALQABALAEAJQADAIAFAFQAFAEAIAAQAHABAGgEQAFgEAEgHQAHgPAAgfQAAgLgCgLQgBgMgEgHQgDgJgFgFQgFgEgJAAQgcAAAAA7gAqWBTQgLgHgHgLQgGgIgFgUQgEgSAAgTQAAgUAEgRQAEgRAHgLQAPgXAfAAQAQAAALAGQAGADAFAFIAIAKQAIAMADAQQAEAYAAAMQAAAVgEARQgEAQgIAMQgPAXgeAAQgQAAgMgGgAqWAAQAAAMABALQACALADAJQAEAIAFAFQAFAEAIAAQAHABAFgEQAGgEADgHQAHgPAAgfQAAgLgBgLQgBgMgEgHQgDgJgGgFQgFgEgIAAQgcAAAAA7gADrBVIgLgBIAAioIBaAAIAAAcIg7AAIAAAlIAJgBIAKgBQAMABAJACQAJADAHAGQAHAGADAIQAEALAAAOQAAAdgPAPQgHAGgLAEQgKAEgPgBgAD/AGIAAA1IAPABQAKAAAGgGQAGgGAAgQQAAgJgCgFQgCgFgDgDQgDgEgFgBIgKAAgABFBWIgLgCIAAioIAfAAIAAA+IAIgCIALAAQALAAAJACQAJACAHAGQAHAHAEAIQAEALAAARQAAAOgEALQgDALgIAIQgOAPgegBgABZAEIAAA2IAMABQAMAAAHgGQAHgHAAgQQAAgJgDgGQgBgFgEgDQgDgDgFgBIgKgBgAJwBVQgFgBgFgDIAHgaIAHADIAFABQAJAAAEgTIg1h8IAkAAIAbBKIADAWIACAAIADgXIAThJIAgAAIgvCNQgDAKgFAHQgFAHgFADQgGADgJAAgAmcBVQgEgBgGgDIAIgaIAGADIAGABQAJAAADgTIg0h8IAkAAIAaBKIAEAWIABAAIADgXIAUhJIAfAAIguCNQgEAKgFAHQgEAHgGADQgGADgIAAgAoyBWIgIgCIAEgcQAEABAFgBQAEgCADgGQADgGACgKQADgKABgRIAEhZIBWAAIAACpIgfAAIAAiNIgaAAQgCAvgCAdIgFAcQgDALgEAJQgDAFgEAEIgHAHIgIACIgHABgAIpBVIAAhIIguAAIAABIIgfAAIAAipIAfAAIAABGIAuAAIAAhGIAfAAIAACpgAgYBVIAAiNIgpAAIAAgcIBuAAIAAAcIgpAAIAACNgAhtBVIAAhZIACgZIgBAAIgJAbIgxBXIgYAAIAAipIAfAAIAABYIgDAZIABAAIAKgbIAxhWIAYAAIAACpgAjzBVIAAhFQgFADgIAEQgJACgLAAQgJAAgHgCQgHgCgFgGQgFgEgDgJQgEgHAAgNIAAhCIAfAAIAAA4QAAAQAFAGQAEAGAKAAQAHAAAHgCQAGgCADgFIAAhLIAfAAIAACpgArnBVIAAiNIgtAAIAACNIgfAAIAAipIBrAAIAACpg");
	this.shape.setTransform(0,1.8);

	// Слой 1
	this.instance_1 = new lib.Символ15();

	this.addChild(this.instance_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115,-30,230,63.5);


(lib.Символ12 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ55();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124.5,-15.5,249.1,31);


(lib.Символ11 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ52();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-96.4,-12.9,192.8,25.9);


(lib.Символ10 = function() {
	this.initialize();

	// Слой 4
	this.instance = new lib.Символ28();

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF99").s().p("AYZBrQgOgGgLgNQgLgOgGgVQgDgMgCgNIgBgcQAAgfAHgWIAIgUQAEgIAGgHQALgNAPgFQAPgGAOAAQAPAAAMADIASAFIgHAjQgGgDgIgBQgIgCgLgBQgLABgIAEQgIAFgGAJQgLATAAAmQAAAQACAOQADAOAGALQAFAKAJAGQAJAGAMAAQALgBAIgDIAOgHIAIAhQgIAHgOADQgNAEgOAAQgQgBgPgFgAHmBpQgOgJgJgOQgHgKgHgaQgEgVAAgZQAAgaAFgVQAEgVAKgOQATgdAmgBQAUABAPAHQAHAEAGAGQAGAGAFAHQAJAPAFAVQAEAeAAAPQAAAbgFAVQgFAVgJAOQgUAdgmABQgUgBgPgHgAHmAAQAAAQACAOQABAOAFAKQAEAKAHAHQAGAFAKABQAJAAAHgFQAHgFAEgJQAJgSAAgoQAAgOgCgOQgBgOgFgLQgEgKgHgHQgGgFgLgBQgjAAAABMgABaBpQgOgJgKgOQgGgKgHgaQgFgVAAgZQAAgaAFgVQAFgVAJgOQATgdAngBQAUABAPAHQAHAEAGAGQAGAGAEAHQAKAPAEAVQAFAeAAAPQAAAbgFAVQgFAVgKAOQgTAdgmABQgVgBgOgHgABZAAQAAAQACAOQACAOAEAKQAFAKAGAHQAHAFAKABQAJAAAHgFQAGgFAFgJQAJgSAAgoQAAgOgCgOQgCgOgEgLQgEgKgHgHQgHgFgKgBQgkAAAABMgAtsBpQgOgJgJgOQgHgKgHgaQgEgVAAgZQAAgaAFgVQAEgVAKgOQATgdAmgBQAUABAPAHQAHAEAGAGQAGAGAFAHQAJAPAFAVQAEAeAAAPQAAAbgFAVQgFAVgJAOQgUAdgmABQgUgBgPgHgAtsAAQAAAQACAOQABAOAFAKQAEAKAHAHQAGAFAKABQAJAAAHgFQAHgFAEgJQAJgSAAgoQAAgOgCgOQgBgOgFgLQgEgKgHgHQgGgFgLgBQgjAAAABMgAzsBsIgOgCIAAjVIByAAIAAAkIhLAAIAAAvIALgCIANAAQAPAAAMADQAMADAIAJQAIAHAFALQAEAMAAATQAAAkgSATQgJAJgOAFQgNAEgSAAgAzMAHIgHABIAABDIATACQANgBAHgHQAIgIAAgUQAAgLgCgHQgDgHgEgEQgEgEgGgBIgMgBgAMjBsQgGgBgHgFIAKggIAIADIAHABQALAAAFgXIhDieIAuAAIAhBeIAFAcIABAAIAEgdIAZhdIAoAAIg7CyQgFANgGAJQgGAJgHAEQgHAEgLAAgAJkBtIgJgDIAEgjQAGABAGgBQAFgDAEgHQAEgHACgNQADgOACgUIAFhyIBtAAIAADXIgnAAIAAizIghAAQgCA7gEAmQgCATgDAPQgEAPgFALQgEAHgFAFIgJAIIgKADIgJABgApbBtIgKgDIAFgjQAFABAGgBQAGgDADgHQAEgHADgNQADgOACgUIAEhyIBtAAIAADXIgnAAIAAizIghAAQgCA7gDAmQgCATgEAPQgEAPgFALQgDAHgFAFIgKAIIgKADIgJABgA7OBsQgGgBgGgFIAJggIAIADIAHABQAMAAAEgXIhDieIAuAAIAiBeIAEAcIACAAIAEgdIAYhdIAoAAIg6CyQgFANgGAJQgGAJgHAEQgIAEgKAAgAbPBsIAAhXIgRAGIgiBRIgtAAIAjhJIAQgNQgRgFgLgQQgFgFgDgMQgDgKAAgPQAAgTAGgNQAGgOAKgIQAKgIAOgEQAPgDARAAIAKAAIAjAFIAADVgAa3hIQgGABgEAEQgEAFgCAHQgDAGAAALQAAAJADAHQACAHAEAFQAEAEAGACQAFACAHAAIAMAAIAAhGIgGgCIgHAAgAWDBsIAAizIgzAAIAAgkICOAAIAAAkIg0AAIAACzgATWBsIAAjXIBtAAIAAAkIhGAAIAAA1IA/AAIAAAjIg/AAIAAA3IBHAAIAAAkgASgBsIgNgxIgzAAIgNAxIgnAAIA/jYIAfAAIA/DYgASMAbIgRhTIgBAAIgSBTIAkAAgAP5BsIAAhYQgHAFgLAEQgKAEgPAAQgLAAgJgEQgJgDgGgGQgHgHgEgLQgEgIAAgRIAAhUIAnAAIAABHQAAAUAGAIQAFAIANAAQAJAAAIgDQAIgCAFgGIAAhgIAnAAIAADXgAF/BsIAAizIg4AAIAACzIgnAAIAAjXICGAAIAADXgAgMBsIAAhbIg7AAIAABbIgnAAIAAjXIAnAAIAABZIA7AAIAAhZIAlAAIAADXgAiwBsIAAhYQgHAFgLAEQgKAEgPAAQgLAAgJgEQgJgDgGgGQgHgHgEgLQgEgIAAgRIAAhUIAnAAIAABHQAAAUAGAIQAFAIANAAQAJAAAIgDQAIgCAFgGIAAhgIAnAAIAADXgAlMBsIAAhyIADgeIgCAAIgLAgIg+BwIgfAAIAAjXIAnAAIAABwIgDAfIABAAIANgiIA9htIAfAAIAADXgAq9BsIAAizIg0AAIAAgkICOAAIAAAkIgzAAIAACzgAwTBsIAAhXIgQAGIgjBRIgtAAIAkhJIAPgNQgQgFgLgQQgGgFgCgMQgDgKAAgPQAAgTAGgNQAFgOAKgIQALgIAOgEQAOgDARAAIAXABIAWAEIAADVgAwrhIQgFABgEAEQgEAFgDAHQgCAGAAALQAAAJACAHQACAHAEAFQAFAEAFACQAGACAHAAIALAAIAAhGIgFgCIgHAAgA1/BsIAAjXIBtAAIAAAkIhGAAIAAA1IA/AAIAAAjIg/AAIAAA3IBHAAIAAAkgA3pBsIAAizIg0AAIAAgkICOAAIAAAkIgzAAIAACzg");

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-178.2,-11.3,356.5,22.6);


(lib.Символ5 = function() {
	this.initialize();

	// Слой 3
	this.instance = new lib.Символ25();
	this.instance.setTransform(-45.4,-86.8);
	this.instance.alpha = 0.539;
	this.instance.compositeOperation = "lighter";

	// Слой 2
	this.instance_1 = new lib.Символ24();
	this.instance_1.setTransform(-10.2,-84.3);

	// Слой 1
	this.instance_2 = new lib.girl1();
	this.instance_2.setTransform(-128,-144.5);

	this.addChild(this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-128,-144.5,256,289);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ9();
	this.instance.setTransform(-0.2,0.1);
	this.instance.alpha = 0.172;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.94,scaleY:0.94,y:1.5,alpha:0.09},9,cjs.Ease.get(-1)).to({scaleX:0.88,scaleY:0.88,y:3,alpha:0},10,cjs.Ease.get(1)).to({scaleX:0.94,scaleY:0.94,x:-0.1,y:1.6,alpha:0.086},10,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1,x:-0.2,y:0.1,alpha:0.172},10,cjs.Ease.get(1)).wait(1));

	// Слой 1
	this.instance_1 = new lib.Символ8();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.89,scaleY:0.89,y:3},19).to({scaleX:1,scaleY:1,y:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55,-59.7,110,119.8);


(lib.Символ3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ5();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:4.8},9,cjs.Ease.get(-1)).to({y:10},10,cjs.Ease.get(1)).to({y:4.5},11,cjs.Ease.get(-1)).to({y:0},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128,-144.5,256,289);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ56();
	this.instance.setTransform(142.5,120);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:1.5},10,cjs.Ease.get(-1)).to({rotation:3.2},9,cjs.Ease.get(1)).to({rotation:1.8,x:142.6},11,cjs.Ease.get(-1)).to({rotation:0,x:142.5},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-8,293,256);


(lib.Символ1 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ16();
	this.instance.setTransform(356,150);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000D2A").s().p("EiKRA6mMAAAh1KMEUjAAAMAAAB1Kg");
	this.shape.setTransform(365,65);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-520,-310,1770,750);


(lib.Символ57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.Символ59();
	this.instance.setTransform(0,0,1.043,1.043);
	this.instance.alpha = 0.23;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({_off:true},1).wait(2));

	// Слой 1
	this.instance_1 = new lib.Символ13();
	this.instance_1.setTransform(0,-1.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FBB732","#B22629"],[0,1],0,-62.6,0,17.4).s().p("AwIBJQh1AAAAhzIAAgeQADBuByAAMAgRAAAQByAAADhuIAAAeQAABzh1AAg");
	this.shape.setTransform(0,24.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FBB732","#B22629"],[0,1],0,40,0,-40).s().p("AwIEsQhyAAgDhxIAAlxQAAh1B1AAMAgRAAAQB1AAAAB1IAAFxQgDBxhyAAg");
	this.shape_1.setTransform(0,-1.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,y:-1.7}}]}).to({state:[{t:this.instance_1,p:{scaleX:1.043,scaleY:1.043,y:-1.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:1,scaleY:1,y:-1.7}}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-115,-31.7,230,63.5);


(lib.Символ20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ19();
	this.instance.alpha = 0.379;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.207},5,cjs.Ease.get(-1)).to({alpha:0},6,cjs.Ease.get(1)).to({alpha:0.203},7,cjs.Ease.get(-1)).to({alpha:0.379},6,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232.1,-80,339.6,122.7);


(lib.Символ7 = function() {
	this.initialize();

	// Слой 1
	this.instance = new lib.Символ4();
	this.instance.setTransform(210,-12.5);

	this.instance_1 = new lib.Символ3();
	this.instance_1.setTransform(140,0);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(12,-144.5,256,289);


(lib.Символ6 = function() {
	this.initialize();

	// Слой 2
	this.instance = new lib.Символ20();
	this.instance.setTransform(-0.3,-4.8);

	// Слой 1
	this.instance_1 = new lib.Символ18();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-232.4,-84.8,345,136.4);


// stage content:
(lib.ledy_vulk_600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		
		function fl_CustomMouseCursor() {
		
		 this.fon.x = - stage.mouseX / 10;
		 this.fon.y = - stage.mouseY / 10;
		}
		
		this.addEventListener("tick", fl_CustomMouseCursor1.bind(this));
		
		function fl_CustomMouseCursor1() {
		
		 this.girl.x = - stage.mouseX / -20;
		}
		
		
		
		this.addEventListener("tick", fl_CustomMouseCursorb.bind(this));
		
		function fl_CustomMouseCursorb() {
		
		 this.back.x = - stage.mouseX / -5;
		 this.back.y = - stage.mouseY / -5;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 9
	this.instance = new lib.Символ57();
	this.instance.setTransform(439.8,261.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Символ57(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 8
	this.instance_1 = new lib.Символ12();
	this.instance_1.setTransform(435.8,211.8,0.759,0.759);

	this.instance_2 = new lib.Символ11();
	this.instance_2.setTransform(435.8,75.3,1.289,1.289);

	this.instance_3 = new lib.Символ10();
	this.instance_3.setTransform(409.4,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Слой 5
	this.instance_4 = new lib.Символ6();
	this.instance_4.setTransform(435.8,151);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Слой 4
	this.girl = new lib.Символ7();
	this.girl.setTransform(152,155.5);

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1));

	// Слой 2
	this.back = new lib.Символ2();
	this.back.setTransform(196,149);

	this.timeline.addTween(cjs.Tween.get(this.back).wait(1));

	// Слой 1
	this.fon = new lib.Символ1();
	this.fon.setTransform(300,150);

	this.timeline.addTween(cjs.Tween.get(this.fon).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,-10,1770,750);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;