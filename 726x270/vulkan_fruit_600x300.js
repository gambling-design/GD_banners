(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 726,
	height: 270,
	fps: 30,
	color: "#000069",
	manifest: [
		{src:"images/bg_fruit.jpg?1461321830064", id:"bg_fruit"},
		{src:"images/blur.jpg?1461321830064", id:"blur"},
		{src:"images/frame.png?1461321830064", id:"frame"},
		{src:"images/item.jpg?1461321830064", id:"item"},
		{src:"images/llight.png?1461321830064", id:"llight"},
		{src:"images/logo.png?1461321830064", id:"logo"}
	]
};



// symbols:



(lib.bg_fruit = function() {
	this.initialize(img.bg_fruit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,726,270);


(lib.blur = function() {
	this.initialize(img.blur);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,170);


(lib.frame = function() {
	this.initialize(img.frame);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,286,136);


(lib.item = function() {
	this.initialize(img.item);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,98);


(lib.llight = function() {
	this.initialize(img.llight);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,293,83);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,148,107);


(lib.Символ29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.647)").s().p("Eg7aAWpMAAAgtRMB21AAAMAAAAtRgAApHCMAmQAAAIAAubMgmQAAAg");
	this.shape.setTransform(197.9,179.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.4,34.5,760.7,290);


(lib.Символ27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1 - копия
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#02C002","#02FF02","#02B902"],[0,0.518,1],-105.5,0,105.6,0).s().p("AvjD/Qg7AAAAg7IAAmHQAAg6A7gBIfHAAQA7ABAAA6IAAGHQAAA7g7AAg");
	this.shape.setTransform(105.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006600").s().p("AvjD+Qg7AAAAg6IAAmHQAAg7A7AAIfHAAQA7AAAAA7IAAGHQAAA6g7AAg");
	this.shape_1.setTransform(105.5,27.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,211.1,52.8);


(lib.Символ25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FEEC00").ss(2,2).p("Eg66AV0MAAAgrnMB11AAAMAAAArng");
	this.shape.setTransform(386,134.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.8,-6.4,756.3,281.3);


(lib.Символ11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,204,0.2)","rgba(255,255,204,0.608)","rgba(255,255,204,0.651)","rgba(255,255,204,0.576)","rgba(255,255,204,0)"],[0,0.255,0.525,0.753,1],0,48.1,0,-48).s().p("Az1HMIAAuXMAnrAAAIAAOXg");
	this.shape.setTransform(127,46.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,254.1,92.1);


(lib.Символ10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.blur();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,170);


(lib.Символ7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.item();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76,98);


(lib.Символ4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,204,0.749)").s().rr(-35,-24.2,70,48.4,5.9);
	this.shape.setTransform(35,25.5,1,1.054);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70,51);


(lib.Символ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.bg_fruit();
	this.instance.setTransform(8.5,-3.3,1.042,1.042);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.5,-3.3,756.7,281.4);


(lib.Символ6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF"],[0,1],-4.6,0,4.6,0).s().p("AgsDBIAAmBIBZAAIAAGBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.6,-19.3,9.2,38.7);


(lib.копияСимвол4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF33").s().p("Aq9HIIAAuPIV7AAIAAOPg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.2,-45.6,140.5,91.3);


(lib.Символ28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADyBBIAAh+IAlAAIAAA9IAAAAIBKhAIAFAAIAAB+IglAAIAAg+IgBAAIhKBBgAuiA/IgUgEIAAggQAJAFAJABQALACAIAAIAMgBIAHgCQADgCACgDQACgCAAgDQAAgHgFgDQgGgDgIAAIgRAAIAAgVIAQAAQAHAAAEgEQAGgDAAgEQgBgFgFgDQgGgDgJAAQgIAAgLACQgLACgEACIAAgdQARgHAXAAQALAAAKACIAKAEIAIAEQAGAEACAGQADAHAAAIQAAAHgFAHIgGAGQgDAEgEACQAEABAFACQAFACACAEQADAEABAFIACAJQAAAJgEAIQgEAHgHAFQgIAGgLACQgKADgNAAQgMAAgKgBgAMGA+IAAh7IAlAAIAABfIAhAAIAAhfIAlAAIAABfIAgAAIAAhfIAmAAIAAB7gALKA+IAAh7IAmAAIAAB7gAJVA+IABh7IAlAAIAAAvIAUAAQAMAAAKADQAJADAGAFQAEADADAFQADAGABAEIABAJQAAAJgDAHQgEAHgFAEQgNALgRAAgAJ7AjIANAAQASABAAgNQAAgHgEgDQgEgFgHAAIgQAAgAHjA+IAAh7IAzAAQAZAAALANQAHAGAEAHQADAHAAAJQAAAKgDAHQgEAGgHAGQgFAGgJADQgJADgKABIgQAAIAAAngAIIgCIAFAAQALAAAGgEQAFgEAAgIQAAgHgEgEQgGgFgHAAIgKAAgAF8A+IAAh7IBZAAIAAAcIg0AAIAABfgAC2A+IAAh7IAlAAIAAB7gABBA+IABh7IAkAAIAAAvIAVAAQAMAAAKADQAJADAGAFQAEADADAFQADAGABAEIABAJQAAAJgDAHQgEAHgFAEQgNALgRAAgABmAjIAOAAQASABAAgNQAAgHgEgDQgEgFgHAAIgRAAgAg4A+IAAh7IA7AAQAJAAAGADQAGACAGAEQAEAFADAFQACAGAAAHQAAAIgDAGQgDAGgGAFIAAABQAFACADABIAHAHIAEAJIABAJQAAAHgDAIQgCAFgGAGQgFAGgIACQgHADgIAAgAgUAiIAUAAQAFAAADgDQAEgEAAgFQAAgGgEgDQgEgEgFAAIgTAAgAgUgMIAOAAQAFAAACgDQAEgDAAgFQAAgFgDgCQgCgEgFAAIgPAAgAjhA+IAAh7IAlAAIAAAuIAUAAQAMAAAKAEQAJADAGAFQAEADADAFIAEAKIABAJQAAAJgDAHQgDAHgGAEQgGAGgHADQgHACgKAAgAi8AjIARAAQAHABAEgEQAEgEAAgFQAAgHgFgDQgEgFgHAAIgQAAgAk2A+IAAhfIgiAAIAAgcIBpAAIAAAcIgiAAIAABfgAl/A+IgGgOIgsAAIgGAOIgkAAIA+h+IAFAAIA9B+gAmQAYIgLgYIAAAAIgLAYIAWAAgApEA+IAAh7IA0AAQAYAAAMANQAHAGADAHQADAHAAAJQAAAKgDAHQgDAGgHAGQgGAGgIADQgJADgLABIgQAAIAAAngAoegCIAFAAQALAAAFgEQAFgEABgIQgBgHgEgEQgFgFgIAAIgJAAgAq+A+IAAh7IBdAAIAAAaIg4AAIAAAVIAUAAQAMAAAKADQAJADAGAFQAEADADAFIAEAKIABAIQAAAGgCAEIgDAJQgDAHgIAEQgGAFgJACQgHACgGAAgAqZAjIANAAQAKABAEgEQAEgDAAgGQAAgHgEgDQgEgFgHAAIgQAAgArvA+IgGgOIgrAAIgHAOIgjAAIA+h+IAFAAIA8B+gAr/AYIgMgYIgLAYIAXAAg");
	this.shape.setTransform(-167.4,-24.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Слой 1
	this.instance = new lib.Символ27();
	this.instance.setTransform(-167.1,-25.1,1.131,1,0,0,0,105.5,25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.4,-50.6,238.7,52.8);


(lib.Символ26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ25();
	this.instance.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({alpha:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(7.5,-6.7,756.9,282);


(lib.Символ12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ11();
	this.instance.setTransform(127,46.1,1,1,0,0,0,127,46.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,254.1,92.1);


(lib.Символ9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ10();
	this.instance.setTransform(66,85,1,1,0,0,0,66,85);
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-2,136,174);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({skewY:180},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2,-2,140,178);


(lib.Символ6_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ7();
	this.instance.setTransform(38,-342.5,1,1,0,0,0,38,49);

	this.instance_1 = new lib.Символ7();
	this.instance_1.setTransform(38,-244.5,1,1,0,0,0,38,49);

	this.instance_2 = new lib.Символ7();
	this.instance_2.setTransform(38,-146.5,1,1,0,0,0,38,49);

	this.instance_3 = new lib.Символ7();
	this.instance_3.setTransform(38,-49,1,1,0,0,0,38,49);

	this.instance_4 = new lib.Символ7();
	this.instance_4.setTransform(38,147,1,1,0,0,0,38,49);

	this.instance_5 = new lib.Символ7();
	this.instance_5.setTransform(38,49,1,1,0,0,0,38,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Слой 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7693D0").s().p("EgGFAt4MAAAhbvIMLAAMAAABbvg");
	this.shape_1.setTransform(39,-97.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-391.5,78,587.5);


(lib.Символ1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.Символ2();
	this.instance.setTransform(320,152.5,1,1,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.5,-3.3,756.7,281.4);


(lib.Символ7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance_1 = new lib.Символ6();
	this.instance_1.setTransform(48.6,19.2,1,2.718,-74.9,0,0,-5.9,19.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:56.4,x:48.7},43).wait(45).to({rotation:56.4},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52,-18.1,104,36.3);


(lib.копияСимвол5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.копияСимвол4();
	this.instance.setTransform(-4.3,2.3,1,0.106,34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:51.6,y:-36.1},38).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65,-41.5,121.3,87.5);


(lib.копияСимвол2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.копияСимвол4();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.531},9,cjs.Ease.get(-1)).to({alpha:0},10,cjs.Ease.get(1)).to({alpha:0.5},10,cjs.Ease.get(-1)).to({alpha:1},10,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.2,-45.6,140.5,91.3);


(lib.копияСимвол3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("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");
	mask.setTransform(58.7,34.8);

	// Слой 5
	this.instance = new lib.копияСимвол2();
	this.instance.setTransform(61.8,40.6);
	this.instance.alpha = 0.559;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AhvCFIgBgCQAAgEAGgNIAIgPIAAAAQgKgBAAgIQgBgFADgBQATgDAGgHQADgFACgHIAFgKQADgGAGgEQAEACgCAJIABAGQAOgBADACQAAAAABAAQAAAAAAABQAAAAAAABQABABAAAAQAAAEgKALIgPAPQgEAFAAAJIgBAQIgJAAQgEAAgCgDIgDgDIgTARIgEgBgAAvBAQgCgOANgPIgIgFQgDgDgBgDQAAgEAFgBIAQgEQAAAAAAAAQABAAAAgBQAAAAAAgBQAAgBAAAAQADgJADgDIAOgTQAGgIABAKQABACgDAGIABAGQANgCAEABQAAAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAACgLAMQgLAMgBADIAAARQgBALgEABQgFAAgFgEIgHgFQgEACgGAHQgGAHgCADQgDgBAAgDgAhOAVIgBgHQADgFAAgDQgEgDAAgDQgBgFAVgLIADAGIABAEIgEAGQACABABAFIAAAFQAAAEgEAAQgDAAgCgCQgCAHgGABgABFhYQgBgCAEgIQAEgIADAAQgEgDAAgDQAAgDAKgJQAKgJAEAAIABAJIABAAIAFgDIAEABIABAGQgBACgHAGQgGAFAAAFQAAACABAFQABAFgEADIgKABQgCAAgCgCIgCgCIgFACIgDADQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAg");
	mask_1.setTransform(63.7,21.2);

	// Слой 6
	this.instance_1 = new lib.копияСимвол5();
	this.instance_1.setTransform(55.4,43.8);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AlGChIAGgJQAMgTBAheQAcgnAvhKIBIhwQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABIADAAQAFAVAQAkQASAqAFAPQAFAOAYAyIAKASIAAg0IgBAAIgBgDIACgBIBDAAIACACIAAA3IAWgaQAOgTAMgJQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBABAAIBDgBIABAAIABABIAAAAIAAABQAAAEgvAxQAKAHAIALIAMAQQAEgKAQgaQAUgfALgQIAAgCIAAgBIACgBIAbAAIAAgBIA7ADIAAAAQAEACACAEIAEAOIASAWQALAOAQAfIABABIAAhBIAAgNIAAgIIAAgCQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIAAgBIABABQAFgCAPAAIAAABIAnACIAAgBIABABIABACIAAAAIAAAFIABAJIAAAUIAFAAIAeAAIABABIAUABQgCgHAAgIIABgUIAAgCIAAAAQAAgDAFAAIAAABIAbgBIAbAAIACgBIABABIABAAIABAAIACACIgCACIAABxIgCABIgBABIg6AAIgBAAIgBAAIAAAAIgCgBIAAguIgBgBIgmAAIgCABIgRAAQAEAGAAALIgCAYIgBAEIAAABIABAAIgCACIhwAAIgCgBIAAgBQgEgDgGgHQgIgKgBgEIg8ACIAAABQAAAFgOATIgBAAIgBAAIhjAAIgGgBIgBgDIACAAIABgCQgQgQgJgMQgHgJgMgOIgCAAIAAA2IgDABIgCACIg9AAIgBABQAAAAABAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIgDgBIABgDIhQh5IgbAcQghAegPASQgMAOgaAaIgnApQgSAUhLA4gAD7AFQgHAJgBAGIAEgBQAHAAACgDIAQABIgPgSIgGAGgAmwBTIgDAAIgBAAIgTAAIAAABIgBAAIgCAAIABgBIgfACQgMgBgBgBIgVAAIgBAAIgQAAQgBAAgCgHIAAh0IADAAIAAgBIDNAAIABABIgBAAIACADIAAAAIAKASQAGAKAHAFQAAABABAAQAAAAAAABQABAAAAAAQABAAABAAIAEgHIAAAAIgBgBIAKgPIAEgJQACgFADAAIAAAAIAAAAIAAAAIABAAQADgEAHADIAkAAIABAAIAIAAIAPAAIABAAQgEAHgIAHIgLASQgNATgJALIgXAfQgEAFgGALQgGAKgEAEIgXAAIAAABIgLAAIgQAAIAAAAIgHgBIAAgBIgBAAIAAgBIABAAIAAgBIAAAAIAQgdQgBgFgIgLIgKgOIgVgYQgCAAgCAEIgDAGIgHAGQgDABAAAEQAAAFALAIQALAJAAALQAAAMgKAIQgGAFgRAHIgLAAIgBABIgGAAIgCABIAAAAIgEgCgAnQAgQgEACgOABQgBABAAAKQAAAKACACIAMAAIAEgCIASAAIAEgGIACgGQAAgCgHgGQgGgFgGAAIgEABgAnjgIIAAAFQABACAAAJIAFAAIABAAIANAAIALgFQADgDAAgCQAAgEgFgBIgSgDQgDACgIAAg");
	mask_2.setTransform(59.3,49.9);

	// Слой 7
	this.instance_2 = new lib.Символ7_1();
	this.instance_2.setTransform(11.7,92.6);
	this.instance_2.alpha = 0.75;
	this.instance_2.shadow = new cjs.Shadow("#FFFF00",0,0,5);

	this.instance_2.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,117.4,75.5);


(lib.копияСимвол1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.копияСимвол3();
	this.instance.setTransform(0.2,5.2,1.263,1.263,0,0,0,59,41.5);
	this.instance.shadow = new cjs.Shadow("rgba(255,255,255,1)",0,0,5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 1
	this.instance_1 = new lib.logo();
	this.instance_1.setTransform(-74,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 5
	this.instance_2 = new lib.llight();
	this.instance_2.setTransform(-146.8,-36.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.8,-59.6,293,171);


(lib.Символ8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 2
	this.instance = new lib.копияСимвол1();
	this.instance.setTransform(-152.5,442.9,0.839,0.839);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(159).to({regX:-0.3,regY:-1.1,x:-152.7,y:431.2},0).wait(1).to({y:425.4},0).wait(1).to({y:422},0).wait(1).to({y:419.3},0).wait(1).to({y:417.1},0).wait(1).to({y:415.3},0).wait(1).to({y:414.2},0).wait(1).to({y:413.4},0).wait(1).to({y:412.8},0).wait(1).to({y:412.5},0).wait(1).to({regX:0,regY:0,x:-152.5,y:413.3},0).wait(77).to({regX:-0.3,regY:-1.1,x:-152.7,y:413.1},0).wait(1).to({y:414},0).wait(1).to({y:415.3},0).wait(1).to({y:416.8},0).wait(1).to({y:418.8},0).wait(1).to({y:421.2},0).wait(1).to({y:423.9},0).wait(1).to({y:426.9},0).wait(1).to({y:430.5},0).wait(1).to({y:435.4},0).wait(1).to({regX:0,regY:0,x:-152.5,y:442.9},0).wait(1));

	// Слой 11
	this.instance_1 = new lib.Символ28();
	this.instance_1.setTransform(121.1,663.6,1,1,0,0,0,105.5,26.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(158).to({_off:false},0).wait(1).to({regX:-167.1,regY:-24.2,x:-150.9,y:573.1},0).wait(1).to({x:-150.6,y:548.8},0).wait(1).to({x:-150.3,y:534.1},0).wait(1).to({x:-150.2,y:522.4},0).wait(1).to({x:-150,y:512.3},0).wait(1).to({x:-149.9,y:504.3},0).wait(1).to({x:-149.8,y:498.3},0).wait(1).to({x:-149.7,y:493.9},0).wait(1).to({y:490.7},0).wait(1).to({x:-149.6,y:488.4},0).wait(1).to({regX:105.5,regY:26.4,x:123,y:537.4},0).wait(77).to({regX:-167.1,regY:-24.2,x:-149.6,y:488.7},0).wait(1).to({x:-149.7,y:491.2},0).wait(1).to({y:494.7},0).wait(1).to({x:-149.8,y:499.3},0).wait(1).to({x:-149.9,y:505.5},0).wait(1).to({x:-150,y:513.8},0).wait(1).to({x:-150.2,y:525.4},0).wait(1).to({x:-150.4,y:539.6},0).wait(1).to({x:-150.6,y:559.2},0).wait(1).to({x:-151,y:587.8},0).wait(1).to({regX:105.5,regY:26.4,x:121.1,y:674},0).wait(1));

	// Слой 10
	this.instance_2 = new lib.Символ29();
	this.instance_2.setTransform(124.6,421.1,1,1,0,0,0,325.1,157);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(158).to({_off:false},0).to({alpha:1},11).wait(76).to({alpha:0},11).wait(1));

	// Слой 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AzFHOIAAuXILeAAIAAOXgAHpHKIAAuXILcAAIAAOXgAlvHKIAAuXILbAAIAAOXg");
	mask.setTransform(124,442.2);

	// Слой 7
	this.instance_3 = new lib.Символ12();
	this.instance_3.setTransform(123.5,441.7,1,1,0,0,0,127,46.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(112).to({_off:false},0).to({alpha:1},6).wait(127).to({alpha:0},7).wait(5));

	// Слой 6 - копия: 2
	this.instance_4 = new lib.Символ9();
	this.instance_4.setTransform(208.4,441.2,0.585,0.585,0,0,0,66,85.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},0).to({alpha:0.602},8).wait(71).to({alpha:0.809},0).to({_off:true},1).wait(156));

	// Слой 6 - копия
	this.instance_5 = new lib.Символ9();
	this.instance_5.setTransform(122.9,441.2,0.585,0.585,0,0,0,66,85.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).to({alpha:0.602},8).wait(60).to({alpha:0.809},0).to({_off:true},1).wait(167));

	// Слой 6
	this.instance_6 = new lib.Символ9();
	this.instance_6.setTransform(39.4,441.2,0.585,0.585,0,0,0,66,85.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(21).to({_off:false},0).to({alpha:0.602},8).wait(49).to({alpha:0.809},0).to({_off:true},1).wait(178));

	// Символ 6
	this.instance_7 = new lib.Символ6_1();
	this.instance_7.setTransform(208,440.5,1,1,0,0,0,38,49);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1).to({regX:39,regY:-97.8,x:209,y:283.7},0).wait(1).to({y:277.2},0).wait(1).to({y:272.5},0).wait(1).to({y:268.5},0).wait(1).to({y:265.1},0).wait(1).to({y:262.8},0).wait(1).to({y:261.1},0).wait(1).to({y:259.8},0).wait(1).to({regX:38,regY:49,x:208,y:405.5},0).wait(1).to({regX:39,regY:-97.8,x:209,y:259.7},0).wait(1).to({y:261.2},0).wait(1).to({y:263.5},0).wait(1).to({y:266.5},0).wait(1).to({y:270.7},0).wait(1).to({y:276.2},0).wait(1).to({regY:-97.7,y:283.1},0).wait(1).to({regY:-97.8,y:291.1},0).wait(1).to({y:299.8},0).wait(1).to({y:308.6},0).wait(1).to({regY:-97.7,y:317.8},0).wait(1).to({y:328.6},0).wait(1).to({regY:-97.8,y:343.5},0).wait(1).to({y:364.5},0).wait(1).to({regX:38,regY:49,x:208,y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).wait(1).to({regX:39,regY:-97.8,x:209,y:448.2},0).wait(1).to({y:487.1},0).wait(1).to({regY:-97.7,y:514.5},0).wait(1).to({regY:-97.8,y:534.4},0).wait(1).to({regY:-97.7,y:550.6},0).wait(1).to({regY:-97.8,y:562.8},0).wait(1).to({y:571.8},0).wait(1).to({y:578.4},0).wait(1).to({y:583.4},0).wait(1).to({regX:38,regY:49,x:208,y:734},0).wait(146));

	// Символ 6
	this.instance_8 = new lib.Символ6_1();
	this.instance_8.setTransform(122,440.5,1,1,0,0,0,38,49);

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1).to({regX:39,regY:-97.8,x:123,y:283.7},0).wait(1).to({y:277.2},0).wait(1).to({y:272.5},0).wait(1).to({y:268.5},0).wait(1).to({y:265.1},0).wait(1).to({y:262.8},0).wait(1).to({y:261.1},0).wait(1).to({y:259.8},0).wait(1).to({regX:38,regY:49,x:122,y:405.5},0).wait(1).to({regX:39,regY:-97.8,x:123,y:259.7},0).wait(1).to({y:261.2},0).wait(1).to({y:263.5},0).wait(1).to({y:266.5},0).wait(1).to({y:270.7},0).wait(1).to({y:276.2},0).wait(1).to({regY:-97.7,y:283.1},0).wait(1).to({regY:-97.8,y:291.1},0).wait(1).to({y:299.8},0).wait(1).to({y:308.6},0).wait(1).to({regY:-97.7,y:317.8},0).wait(1).to({y:328.6},0).wait(1).to({regY:-97.8,y:343.5},0).wait(1).to({y:364.5},0).wait(1).to({regX:38,regY:49,x:122,y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).wait(1).to({regX:39,regY:-97.8,x:123,y:462.1},0).wait(1).to({y:501.2},0).wait(1).to({y:526.2},0).wait(1).to({y:545.4},0).wait(1).to({regY:-97.7,y:559.6},0).wait(1).to({regY:-97.8,y:569.4},0).wait(1).to({y:576.4},0).wait(1).to({y:581.3},0).wait(1).to({y:584.7},0).wait(1).to({regX:38,regY:49,x:122,y:734},0).wait(157));

	// Символ 6
	this.instance_9 = new lib.Символ6_1();
	this.instance_9.setTransform(38,440.5,1,1,0,0,0,38,49);

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1).to({regX:39,regY:-97.8,x:39,y:283.7},0).wait(1).to({y:277.2},0).wait(1).to({y:272.5},0).wait(1).to({y:268.5},0).wait(1).to({y:265.1},0).wait(1).to({y:262.8},0).wait(1).to({y:261.1},0).wait(1).to({y:259.8},0).wait(1).to({regX:38,regY:49,x:38,y:405.5},0).wait(1).to({regX:39,regY:-97.8,x:39,y:259.7},0).wait(1).to({y:261.2},0).wait(1).to({y:263.5},0).wait(1).to({y:266.5},0).wait(1).to({y:270.7},0).wait(1).to({y:276.2},0).wait(1).to({regY:-97.7,y:283.1},0).wait(1).to({regY:-97.8,y:291.1},0).wait(1).to({y:299.8},0).wait(1).to({y:308.6},0).wait(1).to({regY:-97.7,y:317.8},0).wait(1).to({y:328.6},0).wait(1).to({regY:-97.8,y:343.5},0).wait(1).to({y:364.5},0).wait(1).to({regX:38,regY:49,x:38,y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).to({y:832.5},10).wait(1).to({y:538.5},0).wait(1).to({regX:39,regY:-97.8,x:39,y:445.6},0).wait(1).to({regY:-97.7,y:480.3},0).wait(1).to({regY:-97.8,y:504.7},0).wait(1).to({y:524.7},0).wait(1).to({regY:-97.7,y:542.7},0).wait(1).to({regY:-97.8,y:557.1},0).wait(1).to({regY:-97.7,y:568},0).wait(1).to({regY:-97.8,y:575.9},0).wait(1).to({y:582.2},0).wait(1).to({regX:38,regY:49,x:38,y:734},0).wait(168));

	// Слой 1
	this.instance_10 = new lib.Символ4();
	this.instance_10.setTransform(-322.6,337.2,0.922,0.922,0,0,0,35,25.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({x:-251.4},0).wait(4).to({x:-179.1},0).wait(4).to({x:-108.2},0).wait(4).to({x:-39.4},0).wait(4).to({x:31.7},0).wait(4).to({x:101.8},0).wait(4).to({x:173.1},0).wait(3).to({regY:25.5,x:245.1},0).wait(3).to({regY:25.6,x:316.2,y:337.4},0).wait(3).to({x:316.1,y:391.2},0).wait(3).to({x:316.7,y:444.8},0).wait(3).to({y:496.8},0).wait(2).to({x:317.2,y:550.5},0).wait(2).to({x:246.2,y:550},0).wait(2).to({x:173.6,y:550.1},0).wait(2).to({x:104,y:550},0).wait(2).to({regY:25.5,x:33.3,y:549.5},0).wait(2).to({x:-38.6},0).wait(1).to({x:-108.4,y:549.7},0).wait(1).to({x:-179.8,y:549.8},0).wait(1).to({regY:25.6,x:-250.9,y:549.1},0).wait(1).to({x:-322.6,y:549.9},0).wait(1).to({x:-322.8,y:496.2},0).wait(1).to({x:-322.9,y:445.1},0).wait(1).to({x:-321.8,y:390.4},0).wait(1).to({x:-322.3,y:337.2},0).wait(1).to({x:29.7},0).wait(1).to({x:100.8},0).wait(1).to({x:171.1},0).wait(1).to({regY:25.5,x:315.5},0).wait(1).to({regY:25.6,x:317.2,y:444.5},0).wait(1).to({x:245.3,y:549.7},0).wait(1).to({x:174.3,y:550},0).wait(1).to({x:33.3,y:549.5},0).wait(2).to({x:-108.6,y:550},0).wait(2).to({x:-179,y:549.5},0).wait(2).to({x:-251.1,y:549.1},0).wait(7).to({x:-322.3,y:550.3},0).wait(8).to({regY:25.5,x:-323,y:496.4},0).wait(11).to({x:-323.1,y:444.3},0).wait(16).to({x:-322.1,y:389.7},0).wait(138));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-354.9,313.6,601.1,227.3);


// stage content:



(lib.vulkan_fruit_600x300 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodyStyle = document.body.style;
		bodyStyle.margin = 0;
		bodyStyle.padding = 0;
		
		var _this = this;
		
		stage.canvas.onmouseover = fl_MouseOverHandler_5;
		
		function fl_MouseOverHandler_5()
		{
		    _this.main.gotoAndStop(244);
		}
		
		stage.canvas.onmouseout = fl_MouseOutHandler_2;
		
		function fl_MouseOutHandler_2()
		{
		    _this.main.gotoAndPlay(245);
		}
		
		stage.canvas.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
		window.open(clickTAG, "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Слой 4
	this.instance = new lib.Символ26();
	this.instance.setTransform(300,152.5,0.959,0.959,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Слой 3
	this.main = new lib.Символ8();
	this.main.setTransform(483.7,-8.6,0.959,0.959,0,0,0,123,293.8);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// Слой 6
	this.instance_1 = new lib.frame();
	this.instance_1.setTransform(347.9,70.9,0.959,0.959);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Слой 1
	this.instance_2 = new lib.Символ1();
	this.instance_2.setTransform(299,149.5,0.959,0.959,0,0,0,320,152.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(363.2,-156.4,726.1,569);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;