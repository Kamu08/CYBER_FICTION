function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
    ./photos/male0001.png
    ./photos/male0002.png
    ./photos/male0003.png
    ./photos/male0004.png
    ./photos/male0005.png
    ./photos/male0006.png
    ./photos/male0007.png
    ./photos/male0008.png
    ./photos/male0009.png
    ./photos/male0010.png
    ./photos/male0011.png
    ./photos/male0012.png
    ./photos/male0013.png
    ./photos/male0014.png
    ./photos/male0015.png
    ./photos/male0016.png
    ./photos/male0017.png
    ./photos/male0018.png
    ./photos/male0019.png
    ./photos/male0020.png
    ./photos/male0021.png
    ./photos/male0022.png
    ./photos/male0023.png
    ./photos/male0024.png
    ./photos/male0025.png
    ./photos/male0026.png
    ./photos/male0027.png
    ./photos/male0028.png
    ./photos/male0029.png
    ./photos/male0030.png
    ./photos/male0031.png
    ./photos/male0032.png
    ./photos/male0033.png
    ./photos/male0034.png
    ./photos/male0035.png
    ./photos/male0036.png
    ./photos/male0037.png
    ./photos/male0038.png
    ./photos/male0039.png
    ./photos/male0040.png
    ./photos/male0041.png
    ./photos/male0042.png
    ./photos/male0043.png
    ./photos/male0044.png
    ./photos/male0045.png
    ./photos/male0046.png
    ./photos/male0047.png
    ./photos/male0048.png
    ./photos/male0049.png
    ./photos/male0050.png
    ./photos/male0051.png
    ./photos/male0052.png
    ./photos/male0053.png
    ./photos/male0054.png
    ./photos/male0055.png
    ./photos/male0056.png
    ./photos/male0057.png
    ./photos/male0058.png
    ./photos/male0059.png
    ./photos/male0060.png
    ./photos/male0061.png
    ./photos/male0062.png
    ./photos/male0063.png
    ./photos/male0064.png
    ./photos/male0065.png
    ./photos/male0066.png
    ./photos/male0067.png
    ./photos/male0068.png
    ./photos/male0069.png
    ./photos/male0070.png
    ./photos/male0071.png
    ./photos/male0072.png
    ./photos/male0073.png
    ./photos/male0074.png
    ./photos/male0075.png
    ./photos/male0076.png
    ./photos/male0077.png
    ./photos/male0078.png
    ./photos/male0079.png
    ./photos/male0080.png
    ./photos/male0081.png
    ./photos/male0082.png
    ./photos/male0083.png
    ./photos/male0084.png
    ./photos/male0085.png
    ./photos/male0086.png
    ./photos/male0087.png
    ./photos/male0088.png
    ./photos/male0089.png
    ./photos/male0090.png
    ./photos/male0091.png
    ./photos/male0092.png
    ./photos/male0093.png
    ./photos/male0094.png
    ./photos/male0095.png
    ./photos/male0096.png
    ./photos/male0097.png
    ./photos/male0098.png
    ./photos/male0099.png
    ./photos/male0100.png
    ./photos/male0101.png
    ./photos/male0102.png
    ./photos/male0103.png
    ./photos/male0104.png
    ./photos/male0105.png
    ./photos/male0106.png
    ./photos/male0107.png
    ./photos/male0108.png
    ./photos/male0109.png
    ./photos/male0110.png
    ./photos/male0111.png
    ./photos/male0112.png
    ./photos/male0113.png
    ./photos/male0114.png
    ./photos/male0115.png
    ./photos/male0116.png
    ./photos/male0117.png
    ./photos/male0118.png
    ./photos/male0119.png
    ./photos/male0120.png
    ./photos/male0121.png
    ./photos/male0122.png
    ./photos/male0123.png
    ./photos/male0124.png
    ./photos/male0125.png
    ./photos/male0126.png
    ./photos/male0127.png
    ./photos/male0128.png
    ./photos/male0129.png
    ./photos/male0130.png
    ./photos/male0131.png
    ./photos/male0132.png
    ./photos/male0133.png
    ./photos/male0134.png
    ./photos/male0135.png
    ./photos/male0136.png
    ./photos/male0137.png
    ./photos/male0138.png
    ./photos/male0139.png
    ./photos/male0140.png
    ./photos/male0141.png
    ./photos/male0142.png
    ./photos/male0143.png
    ./photos/male0144.png
    ./photos/male0145.png
    ./photos/male0146.png
    ./photos/male0147.png
    ./photos/male0148.png
    ./photos/male0149.png
    ./photos/male0150.png
    ./photos/male0151.png
    ./photos/male0152.png
    ./photos/male0153.png
    ./photos/male0154.png
    ./photos/male0155.png
    ./photos/male0156.png
    ./photos/male0157.png
    ./photos/male0158.png
    ./photos/male0159.png
    ./photos/male0160.png
    ./photos/male0161.png
    ./photos/male0162.png
    ./photos/male0163.png
    ./photos/male0164.png
    ./photos/male0165.png
    ./photos/male0166.png
    ./photos/male0167.png
    ./photos/male0168.png
    ./photos/male0169.png
    ./photos/male0170.png
    ./photos/male0171.png
    ./photos/male0172.png
    ./photos/male0173.png
    ./photos/male0174.png
    ./photos/male0175.png
    ./photos/male0176.png
    ./photos/male0177.png
    ./photos/male0178.png
    ./photos/male0179.png
    ./photos/male0180.png
    ./photos/male0181.png
    ./photos/male0182.png
    ./photos/male0183.png
    ./photos/male0184.png
    ./photos/male0185.png
    ./photos/male0186.png
    ./photos/male0187.png
    ./photos/male0188.png
    ./photos/male0189.png
    ./photos/male0190.png
    ./photos/male0191.png
    ./photos/male0192.png
    ./photos/male0193.png
    ./photos/male0194.png
    ./photos/male0195.png
    ./photos/male0196.png
    ./photos/male0197.png
    ./photos/male0198.png
    ./photos/male0199.png
    ./photos/male0200.png
    ./photos/male0201.png
    ./photos/male0202.png
    ./photos/male0203.png
    ./photos/male0204.png
    ./photos/male0205.png
    ./photos/male0206.png
    ./photos/male0207.png
    ./photos/male0208.png
    ./photos/male0209.png
    ./photos/male0210.png
    ./photos/male0211.png
    ./photos/male0212.png
    ./photos/male0213.png
    ./photos/male0214.png
    ./photos/male0215.png
    ./photos/male0216.png
    ./photos/male0217.png
    ./photos/male0218.png
    ./photos/male0219.png
    ./photos/male0220.png
    ./photos/male0221.png
    ./photos/male0222.png
    ./photos/male0223.png
    ./photos/male0224.png
    ./photos/male0225.png
    ./photos/male0226.png
    ./photos/male0227.png
    ./photos/male0228.png
    ./photos/male0229.png
    ./photos/male0230.png
    ./photos/male0231.png
    ./photos/male0232.png
    ./photos/male0233.png
    ./photos/male0234.png
    ./photos/male0235.png
    ./photos/male0236.png
    ./photos/male0237.png
    ./photos/male0238.png
    ./photos/male0239.png
    ./photos/male0240.png
    ./photos/male0241.png
    ./photos/male0242.png
    ./photos/male0243.png
    ./photos/male0244.png
    ./photos/male0245.png
    ./photos/male0246.png
    ./photos/male0247.png
    ./photos/male0248.png
    ./photos/male0249.png
    ./photos/male0250.png
    ./photos/male0251.png
    ./photos/male0252.png
    ./photos/male0253.png
    ./photos/male0254.png
    ./photos/male0255.png
    ./photos/male0256.png
    ./photos/male0257.png
    ./photos/male0258.png
    ./photos/male0259.png
    ./photos/male0260.png
    ./photos/male0261.png
    ./photos/male0262.png
    ./photos/male0263.png
    ./photos/male0264.png
    ./photos/male0265.png
    ./photos/male0266.png
    ./photos/male0267.png
    ./photos/male0268.png
    ./photos/male0269.png
    ./photos/male0270.png
    ./photos/male0271.png
    ./photos/male0272.png
    ./photos/male0273.png
    ./photos/male0274.png
    ./photos/male0275.png
    ./photos/male0276.png
    ./photos/male0277.png
    ./photos/male0278.png
    ./photos/male0279.png
    ./photos/male0280.png
    ./photos/male0281.png
    ./photos/male0282.png
    ./photos/male0283.png
    ./photos/male0284.png
    ./photos/male0285.png
    ./photos/male0286.png
    ./photos/male0287.png
    ./photos/male0288.png
    ./photos/male0289.png
    ./photos/male0290.png
    ./photos/male0291.png
    ./photos/male0292.png
    ./photos/male0293.png
    ./photos/male0294.png
    ./photos/male0295.png
    ./photos/male0296.png
    ./photos/male0297.png
    ./photos/male0298.png
    ./photos/male0299.png
    ./photos/male0300.png
 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.min(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})