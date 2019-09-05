import gui from 'gui';

import { repo } from '../git';

import AppMenu from './AppMenu';


class Gui {
  win = gui.Window.create({});
  contentView = gui.Container.create();
  projectName = '';

  handleSaveNew = () => {
    const dialog = gui.FileOpenDialog.create();
    dialog.setOptions(gui.FileDialog.optionPickFolders);
    if (dialog.runForWindow(this.win)) {
      const p = dialog.getResult();
      const paths = p.split('/');
      const folder = paths[paths.length - 1];
      this.projectName = folder;
      this.win.setTitle(folder);
      repo.initRepo(p, { isBare: 0 });
    }
  };

  handleNewProject = () => {
    this.handleSaveNew();
  };

  constructor() {
    this.appMenu = new AppMenu({
      onNewProject: this.handleNewProject,
      onQuit: Gui.handleQuit,
    });
    this.setupWindow();
    this.setupAppMenu();
  }

  static handleQuit() {
    gui.MessageLoop.quit();
  }

  setupWindow() {
    this.win.setContentSize({width: 400, height: 400});
    this.win.onClose = Gui.handleQuit;
    this.contentView.setStyle({flexDirection: 'row'});
    this.win.setContentView(this.contentView);
  }

  setupAppMenu() {
    if (process.platform === 'darwin') {
      gui.app.setApplicationMenu(this.appMenu.menu);
    } else {
      this.win.setMenuBar(this.appMenu.menu);
    }
  }

  activate() {
    this.win.center();
    this.win.activate();
  }
}

export default Gui;
