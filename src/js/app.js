const canvas = document.getElementById("renderSurface");
let myFluid = new Fluid(canvas);

myFluid.mapBehaviors({
  sim_resolution:128,
  dye_resolution:512,


  paused: false,
  pressure:0.0,
  curl:40,
  multi_color:false,
  render_shaders:true,
  emitter_size:0.1,
  transparent:true
});

// myFluid.applyBackground('gradient','#010f32','#003884','#040a2c','linear');
myFluid.applyBackground('gradient', '#003b89,#010a28', 'radial');

myFluid.activate();



// document.addEventListener('cli')