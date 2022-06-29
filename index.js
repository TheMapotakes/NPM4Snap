SnapExtensions.primitives.set(
//copied from Snap! library
  'SciS_setvalue(which,value)',
  function (which, value) {
    var stage = this.parentThatIsA(StageMorph),
      ide = stage.parentThatIsA(IDE_Morph),
      world = stage.parentThatIsA(WorldMorph);
    try {
      ide.savingPreferences = false;
      switch (which) {
        case 'Project notes':
          ide.projectNotes = value;
          break;
        case 'Project name':
          ide.setProjectName(value);
          break;
        case 'Language':
          ide.setLanguage(value);
          break;
        case 'Zoom blocks':
          if (!isNaN(value))
            ide.setBlocksScale(Math.min(value, 12));
          break;
        case 'Stage size':
          if ((value instanceof List) && value.length() == 2
            && !isNaN(value.at(1)) && !isNaN(value.at(2)))
            ide.setStageExtent(new Point(value.at(1), value.at(2)));
          break;
        case 'Stage scale':
          ide.toggleStageSize(value != 1, Math.max(0.1, value));
          break;
        case 'Visible palette':
          ide.currentCategory = value.toLowerCase();
          ide.categories.children.forEach(function (each) {
            each.refresh();
          });
          ide.refreshPalette(true);
          break;
      }
      ;
    } finally {
      ide.savingPreferences = true;
    }
    ;
  }
);
