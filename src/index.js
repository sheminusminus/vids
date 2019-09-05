import 'dotenv/config';
import fs from 'fs-extra';
import gui from 'gui';
import path from 'path';

import { Gui } from './gui';


const ui = new Gui();
ui.activate();

async function ensureProjectDir() {
  try {
    const dir = path.resolve(__dirname);
    const projectsDir = path.join(dir, '..', 'projects');
    await fs.ensureDir(projectsDir);
  } catch (err) {
    console.log(err);
  }
}

async function startup() {
  await ensureProjectDir();

  if (!process.versions.yode) {
    gui.MessageLoop.run();
    process.exit(0);
  }
}

process.nextTick(startup);
