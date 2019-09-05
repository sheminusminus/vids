import gui from 'gui';


class AppMenu {
  constructor(commands = {}) {
    const {
      onNewProject,
      onQuit,
    } = commands;

    this.menu = gui.MenuBar.create([
      {
        label: 'File',
        submenu: [
          {
            label: 'Quit',
            accelerator: 'CmdOrCtrl+Q',
            onClick: onQuit,
          },
        ],
      },
      {
        label: 'Project',
        submenu: [
          {
            label: 'New',
            accelerator: 'CmdOrCtrl+N',
            onClick: onNewProject,
          },
        ],
      },
      {
        label: 'Edit',
        submenu: [
          { role: 'copy' },
          { role: 'paste' },
          { type: 'separator' },
          { role: 'undo' },
          { role: 'redo' },
        ],
      },
    ]);
  }
}


export default AppMenu;
