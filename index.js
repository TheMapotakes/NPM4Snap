SnapExtensions.primitives.set(
  'SciS_SetSciSnapLogo()',
  function () {
    IDE_Morph.prototype.createLogo = function () {
      var myself = this;

      if (this.logo) {
        this.logo.destroy();
      }

      this.logo = new Morph();

      this.logo.texture = "data:image/png;base64," +
        "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" +
        "rkJggg==";

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
