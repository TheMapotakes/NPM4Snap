SnapExtensions.primitives.set(
  'SciS_SetSciSnapLogo()',
  function () {
    IDE_Morph.prototype.createLogo = function () {
      var myself = this;

      if (this.logo) {
        this.logo.destroy();
      }

      this.logo = new Morph();

      this.logo.texture = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAW0AAACKCAMAAABW6eueAAAAhFBMVEX////5qDr5oyb5pzf5pS75pjL5pCr5pjT5oiL//vv+8eT80KH/9ur/+/X94L75rUb81qv+7977ypH6tVr96tT7y5b7w3/958794sb/+O/827X7wXv6u2z95cr6uWj7xob5r0z7yIz81Kf80J75rkn5rED6slP6vXP6t2D7zZX4nQD4mwCeDPh+AAAW4ElEQVR4nO1diZaqurYt0wEqCIoN2GGP+/3//z0CaSFBUGvve+9gnjHO2FWlECYrq8vKys/PgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgxg8KLNZbXbPbandPyvx/K/jGkczncj1yUIO46DEXFn4b8e0/8i/PVkm2ECCHLgSAEkcP9PB+b5TfzTAX2O9cMBCGs0S77d5b8a1jR8ZDfDkGaLY/BblE/Xm33k/dLFKaLcxUaiGdzTL97cjngHCIZmYIBP0+/fcr+FLgDABXn4W28zdJ02rguAfyHdq3YRGCFy+fIdg5nL57dD3OeXr17h6L7gmkp3+iu3bsH0hl6OCiy+OeOTHGiqlIziL16d4QRek13Q3dcV9JLx+rK8hPF7M3KMXs03Cjz7fL4ncRBSnJ36VILg6zIWdJDsAk4uvuFRLyEpMB2Po3i93wRBmhajPZ8nl+Vyftzu8kU2GxX+DUKIAHwIXkrgdJOGOmZmi92g+/6RdPvB9lq4YSWQ4Y5u8MnVDfcz3cQEt/QDo/Pjfp3dRrBwxYFboDApfLQMuPDUqR2TLwrcWn326TPj1xDoOqoRWr3/7OMjAhY/TDx1V2XiR+tNenkeV4/H4ZDnizw/PLbHZ7rR5vbxtXasgB8/P+ndRZWT0PFLDBAsrP5DsgKdqTXBfTca8I8vrHA58tHrC0Xn1QIXckcFDlNZKwDp/3AlkqPHZV3NQN+sRyANIwHRVWd6A2/TgpFFSFLw+pFbAWfvkR2QTnL20u9Jry5pnyCFHgDugcYHE+2WsGLZdW/5dh5u0oP2LsgnIghBZBrrqpvVaAPYvEP2ye34NKTVDsezjhLoEHQcL5TPYnBbPI7nYD0Wlicgbzy+GRAahr37wvWd3Rtkbzs5YhSkzeZcur4zCqxqTPSYNu37vKta73CzQ+Pqjy5kFxOR+jYUNMor9GPxg/qQbn8v8NiZ7JGzsF/m9PbMhHfT9eLuw3oJtzblk2cXskl2nC8n5zBNg2C/jqPxeJokqZo5A+u+ZJ9bWYJEsyUgsV3m8r4aRBPjFe+fKGsd2vucPq9ul3kDzsZhRYoUIPNH7IhbWUL3YK2G18Dm9LRfph3IbHyDbwq38Ev8rdvN7cNHy6OepPjhvjmzrO3WuDQDqZx2xBZQ3rtEu7a7mMMEb/SGcBcOeeltFv6n+mvEadl0874KAFt0EcorWN+I7asNAVLjB7dSHDtBpc1Mnj+SQ8IzIZ6fxIFIizxtxPDcZ+nGl9RSM+YW3ufolt2LUGp1upxXKt1w8VPa4bC7Jbey/ZAXRj2TdbPaagkZ3co0Q/lr7r7Lt2lUsdHl8IFk0/uMwvUmnG/zDLrgj2B7XH+FCBQiS63U7Ta7ZvdFftg9tqvTfBKmwWYdFTbMV3ybULWEMMuy/DgxGEcMUBGJkfI/9j8CiufBWzNjG2VU1qluhq5uSZaO/SqFVgYUMKs+dW5je79wm0kzGqsg6jZJENsCDf04osFnSSQcSa9qp2kDCJ7RlDLqd0sHeZokwTJ+at4aHAtfo444R83MerSO43h9Ul9Y51xGhZN6f6CqiRQiwfbSzrZ/qK8HwCoiXM3P6T6OCn4KjKN4ny5XmWt4MTWoTuZalQU46rtgsu+g3ojFq6AvGo0e2wIP9vrzMg+mvTDSb0Cqkq75G94WcLaPQsbqbEeNzCy+B7Gdljg8vMgEobny8asaApn9xBZMX7MNb23fhdQqYMDYfjQEpaeRjBThIY2nCd1r9Y+tzrY/XdOschiMo4ZyUJLRFiSFlmp5fk0Vqqq3t2+recYWOA/blyW1iLPdSGL1VCTK08Br888BS/pJnwRNppN8VOaES2PSEFNizADp8J4t+RRXvYCnSEP/pMS6g2zb0pqKheZsbxvTuJkQaIVyASlT8VrYKfbucvmibwA1KVbgdMocxHaDqV9A6jBhRNrhT6N4zV5Ya2KLDcCW1jw0ZbvBtjm3aIcS2rjM0K+RC9y5/rEeMTSp62w/iqLxNKm5EWOb8oZ6JkYLkyvn34s0VBdO8nxxz26oXNNxWbQU2tlGKGcOCljF5XVYSmJc/rBZKMaQs72qse32VG2+fBY+T73SbpJcY6fjSl05tLq/H/8p/T/XxfftMhDSsLHMcm54uHu0kDLGtWS1RsbAvPOpqyyR8WtMrGEjoKHlpRoCrq7DZDyrFuDUB+ZsH3W2Qc84Uk2zcRvEkhNIW+K89QihwcX/KSLCNGzco1xQHPHCF0tAxBSaBz1tPMqfdGvlcraV33G2rbEofjTo4x7PovmoRrZh/7IiJQHCc4dcOSHFt+iSsIBCEyN4LVxuMPIab7T8HCLVYrJFqTIBnv5h1HryTSMWbVxUEtvYtmbI2cNGqsfzmu2T+nJw/woEZTiIiZwglsh357+Oy0l+zMTY6SXgzMy2SAck5qQhqb62cXmOVHLrMBdAU0JtbEt6YBnXEv4zM29TVTm/ZlthC6/eKCZRZjOsfjOVr1s6k9OXq6XlAt1FZaGF7az6g1G2uZG8IF6zI0MUnrWJurLNpz50Z5cgjvbhClfJ+o/ZJu8Ue0jPjj+J4qJi4d+OXyUpWWZQdZHsbHM7arwoJ2rniBypVNOY+Q092UZ3ucISb2mi4T22lx+yLR1AHgKelQGIPOj41bISU0NqXsLONvMRzQUO3EjOIMT8AuKDPAequkhGtln2rnLZar7DOHfhe2xfPmM7kbLI2VbNuHDmmhGwg7SqIidpEGtlmzBf3hzoMUKpQgP8iYS3z50SdQ6Z2ObebMk2afgOm+zPW2xPPmN7LIfIxUHNCYpYvu5WELibpEEQzhdMD/ZgG9685ntVyKv+SmcJN4oySDE5JSa2uWWgCQdsivef8T9gW3W3T3KA8ppMleiRCL7JUkZ/s6MLqt3ZhsL2GiMmLaEO2O1FsoTzrziuRrZ59I9pVtuYC/f+AduKnuVio8Xo/Jrq02mOeDnkJUCd2UaIGyzzEi+3b6VlFJqMTzjoNC9pZLsaeKiqIxN6sn3+jG1FZvmyt5pQllG0GgU0817+w+3CNixC5KOQtKsxYOKauQxphNIR+TiSNFgysj0CYTKlJSOyssGfNmsz/i7biqHiOXxNtg2OCsxMM/P8mm2HjFaBfGBLwghoClWU2XFPlf1ZjW3NbI8IRqUy4qwcIXKu6gDeYDv8jG1lLYEXGWh6m+tJxSq1JhktbNNCSydP1egrsXjwrM6QiYGwk3wSaqLfyjYbBE8frGhCHWICcjX/35dtpdDjHQ9Q3o2L8VKlgc9DGXKiuf1qNrb/3B7ndS3QPZij0/qqs0jfMpPKPKfolZXk4DK0F391XMX7/rtsK8qTr2HEBmuzkb8DgrUobkq5yrbD2fYNtWy2kkduKERqjKf6uTvg0qDVUyuFWtkmTBUpadsRkduT/jLb6tINE6Nckzp3PvVTJZjnkcK0TAPnZ51xyTbB99zoelEkd1smgGsKrpch5l/h3yD35Rar2q6VbWa9I+2POOMi04Vt6GBeyJp+yLbh+8lVz6QjrE5bxq53rYIaBDK1eFSw3VxQVuDZ98cxq0CDegiLeBX84WUAQi6gXnHWyjZP/pz1Gwoftp1tWBb2j/LV2fsO2778vrBI3iXDrnmrD2SJwp+lTK66DynDnG1LFaX4mDXtwqra4z+AjO6PZRqLBTZrUWcb22zRoLFwQZg6H9vy25RnMlqswo1aV/4p2+pSmysXFJMond9Rs+6DKxJfXQdGM/FFzja2lh1XWFqEm1vl+Lwf1/PHBn36km1m073G0hOo4qaNge07AMS5r8LmCD5nW8k31cve/Ph5q5U583vocaADOd1CkzRT7dPzIT/yl+BZVu3b6nNTy4RoZbta/Zs2v+o+C5lN1LfA2V6eld0oOoJP2dayac0tO9FJq7/leZPaUr8DGY2c7VrR1XTznLnIKfQwfwtns3C31jC+wTbjxJRtRO59p5W7dqjE+pTtVBsjMkQu/gUraVn20uvLlJhpAP5YcCT3SseLEa+Ylds5LatkbnMASRyyeMSypNvGNotFzdMC6sr899n2ddqgY9pFkjxEooOZ+ObMJEedEIiOIZPTQJUgwnVJblrphJoG8sfBZXctvAKWMrUU9XVg2zKTdPw+25cabRDMTSorZE/C403DzCSnRDc6hd/o1YeoqApjmkSUECb7cLVwXNaKh0cCVXlxcWGtLrgD2/ayEgV2tr2Iza7NR2wbChcQfhrUCdv9z+2oiSrk3q56IntmYFuU8hnrIZkLMQau1ouH+5P0JSN3G3vJ/FXGleFT2faiYLnNwB9mvJWU6Rtsq4sEELHCZOTi7WVdc+GqcJJnHcwatLYB3ci2yKF6Jk3CHqFedS0CyitAl6Q+gt9h24+Cy+NWdhSDIjm0/4htZVXMuYX7OeeFuva3Y6AW9JUNADjb9Xo4I4xsy4VlU2UhI65R1sMTr+mE6zllanybba/kmag7Kb7DtnxieKf2aa2uSWKCFjJJ6lPJ/QLbwjcU13DKPhfVpqXqTw0121xa3H+DbQhGjqxs5mzHf+qd277EtpK1rpyRkz4shzgiBKcUfEO2Q+V65S8Ok+Vpu1vcZzexUt7Y9uXW62aVSsC32YZw4/t7kQUVbDctCmpWCbzBtlIEWP1iU5/DkGTsQamH/AW2RX6c+cDKqD3eai+Ja3svoVvbNnjumN9uZbuKLnz+LJxtg/3mg44/YVtJSSHGdvNOmPvAB+cl20gtxDWzLZyS6sVatqXq4ROZaWGAn95f1UpxtLHNb83zL7/NthIuMKtvDHGZ+3NBr9gm8ziVmWsz22JVtrqVLVRXF0KBllBcb/Xa6rfZ5hXUf4tteV2+cDM2DJkv7RVy3842KSVQ7HC0sM23uVQJfhvb8ksQKguJXpo12uX8t7CtlLGzbWy+iUYWysUv2GaLXGKRxcw2n0WMbdsGNJmSxTLj4k9M7Y7+W9iWWlqUoJmSyMxFjl6wze4vcskWtvkaH5tG6GhKFcjVaSUHe4bGdkefsp3/JbZlakzsLDLwyFNF32Kbbybiyzzknu8e2+Np/rycy93qcXyW/q7YIxnPLK2l3s2TvCHbyvJmf7ZlukOskhlykzw58kqTdGSbB5MyjwhFHwZUNRRS14z43SfW1gsd8ttGtpnnL+qa+7GNHy+WpxqQE0ws2xjGzMt1ihfxDbZ5CXYi6/QRaOmIVsVdS3urmda1m2dNrNQLV3Iv1Gk/tke4r3TLCii5XTutD9rlyZot/o5ss0GK/gr4Gu7Dlj1reBsuMxNdfIAtbLM5a6wUZ6n2U4/oRi+UcPt1KVYaM8gvBkSvJ+Flpt6ryJ2zzX8WbLuE6gYuvkIRM33pHOjHfBOPDLi91WdrPUlVbOQb+mNy5XmvR+6d2e5Jt8yKqG7vOJcdMLBsxkw1Ot+Bb2SbpVpEjwvOdrxM99HUXzPxFU4GW9tk9TV5G6GtEGyXXTXrpQxp7Unl16LaS+rPtmkh1w65lqu3bNwcUNn4DrhbmQ2iE5+vlBm3IbKColI9IeC68KD7dkklYML9qXIdzOG+dMmJ6nCIthc4yXclHO1KrNeJ39hVzzdNS5Xege168AdRs7bAClnO2uhqF2/Cc7pW6Ko6BLFAx7SvlMcpdMGRnNaG5v9sgxdLgDFBqSp+p396EV0O5bBZl9jXnvipseVWTxYDTeihUJBUkcByDxHXC7HbaM1rY7tXk2K5EmvtV8XBikrZxPQNbDOHiu6bAuZGX0yMxLo67XSOs/KftloRO5B9j7lWfsHzMtFV9l+G5MYVJL0xuodBgZRxEDmzAlrUamW7mQq2Q2H7RecHnzkQXIBPDXb49pbCoTI3rpSbF7mZ9B6Oy/K5xhX4NogVNwP0BLWoSAwet7KTjgOzkH85Kd4ArreD8UrEmdIxw8p2j5ZpsjrOUMehws+4uDCT5M1qdlLsXVphWxY14ntnZBdlP2aGtHfjxrbGMLXlAKU9TtmUPlE0D60iJ5b3lkhtItmGDtZVEjR/2YBDQ5OYVUB0k5txmSAkM026MVOPP35BKTRkmpIoFBO52X7F1P8RojbD2dYYpuaAQDC2fXKu+FlNSMst2P6/2eGx01zkF3KqYNdg+5YZyndCVYVxWr05IHw1Ebs7/kClzlSkyZvG6WV7RwAob6fenHRbKzYsGynOQkOfRFOjoDrSuk8BicUqlUdk2N+bNCacba/y3nfqdunOnRwUD5CNJ8Mgr1GxXuj5ab7j4MdPV/k9K3DfiqepNlxAGHj+dJ8uHxldzml0AYRIvYdX26eAgk2wWVN9vs40TwIirIgtuZRnVdDWd7E4q2JyOS2aBre2HsGQsP7b1oblbO2z8Fjqp88o2+FQ5yYlsrkJ9wCLKe2A2WnDq6an4QLUDBjSZh61J/InXugG6T7F8tAxc8wCyVM2rprVVp5VjRwsAKnygRADOE/U3U2IsMMq9LMqzPsCr/WjQXx55glKjZq7nCPFXRfzoN4bXIkObEt9TUhJ4e83qyrFi3m8W52Oj8w1pIuI9fqe3ETy6igJhB9hnPjjYFdfH6iJ2vi8G1ESb6vybLCjKYrtAAhGp43w1rz1ESlPRvCsbFL6eGxXx9PzQtuUBnTGOehkPDHn/A7bMiTkqSJhrqBT+krGkZOD2Yr7iz4BIS7lktRdP1PDOH865c9cj527g8oQmd0LZI5bX27TG/CWwU7xCeduyarums7hayhZKeYDm/fnNojCJlW3xm/KnYZXJxjtProJ7HOCi9hrWYfqsHa3ko0WQlHHkA4WtrQ2kvjx/gkpChxLZCSQfLEB+gvYNg+N1fKL7h6guo2ECrffveufA26rNPJ9aiV9Py6M6TcEu0MKoethW+UgPxsLqkUfnp9E6yCdqGRbu8A2oQZd5JBeeg0PYsLUHwafHYikwOiq1dD5eAZy6J9YVCGWD3/Gm/Nxt5ixM5O07SPdU9yeOiud9py9eb171P8gqzYQa1yn4typOzx0L6LK/93hlG52vIK0nNzszYIeKddmz13b0EG2eecMg9pVcPuJTKRjD9q1qWd5fcAzqpOCPgfwGAY02y7ctrPbLIeGmNGlGfiIZkGy9LMzP8pO8wA+gqzl/YJOkk3hnWwTsTpMAbl35ipE148ObILth4DhlsN/DHh9jgct495VgXbwjtdR0Fw41viaryabwo3xc9vTO110tkByufOjGUnVJNatUgS32fW+U3bfe8+2I0DqB4f0gzPqV+Vg7U/tlKc1EoBuW9lApSvdiJ33WPABZ/kp3IyVBsVz4znAENx7Nlf+SfZpWB6ytClPWaLnKSQ+9ZJqn5uuiEWBIXKM4h09+EJFZ/rxyJpctOBoFjW8Wy6Xl0m61pcmOgUwjruPwkvx/WW4bm5eLjTSvcE3BqPfPPo3OV9B/WBAus2oat+bbM7laDm6HnpJsr71Oz8/uenaDrZl2PNXmr6wpy/f+H6nnIpIPcnHW+cG9sE0OC0Qy2CVamcxtx7Eue2i6tFb58x7hgwlutlX28L2JD9xWs+F5fDT1Z2Uj+4Wquq3Di+vw5tGMYVobG6BUQLlMxZWGOBTf8Eusa15SRDs2h7fn1v9uMInv3Q/l9gbr/eb+M1B/yo8U3qNnzWKb/fDvJ636IFAPYITkpcqlKpBgwOGwe38t6T0l+HtQP3Z8OxwnKT7KOl4sFHLxdM7oCdS0Zd3C7tcLb4sEP0KwixJCQDebr55mvw/xll16LH7+O4cnAaX+fE4T7u7YV60OT9Pp+PxeDo9z5u+/tt/OvwLLkw5pkGZu3r3ZOsB3RGFp+1u+/xARw8YMGDAgAEDBgwYMGDAgAEDBgwYMGDAgAEDBgwYMGDAb+H/AeD0ahKVvUxpAAAAAElFTkSuQmCC";

      this.logo.render = function (ctx) {
        var gradient = ctx.createLinearGradient(
          0,
          0,
          this.width(),
          0
          );
        gradient.addColorStop(0, 'black');
        gradient.addColorStop(0.5, myself.frameColor.toString());
        ctx.fillStyle = MorphicPreferences.isFlat ?
          myself.frameColor.toString() : gradient;
        ctx.fillRect(0, 0, this.width(), this.height());
        if (this.cachedTexture) {
          this.renderCachedTexture(ctx);
        } else if (this.texture) {
          this.renderTexture(this.texture, ctx);
        }
      };

      this.logo.renderCachedTexture = function (ctx) {
        ctx.drawImage(
          this.cachedTexture,
          5,
          Math.round((this.height() - this.cachedTexture.height) / 2)
          );
        this.changed();
      };

      this.logo.mouseClickLeft = function () {
        myself.snapMenu();
      };

      this.logo.color = BLACK;
      this.logo.setExtent(new Point(200, 28)); // dimensions are fixed
      this.add(this.logo);
    };
    var stage = this.parentThatIsA(StageMorph),
      ide = stage.parentThatIsA(IDE_Morph),
      world = stage.parentThatIsA(WorldMorph);
    ide.createLogo();
    ide.createControlBar();
    ide.fixLayout();
  }
);
