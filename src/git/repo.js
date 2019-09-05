import NodeGit from 'nodegit';


export function initRepo(path, options = {}) {
  const { isBare } = options;

  NodeGit.Repository.init(path, isBare).then((repo) => {
    // Inside of this function we have an open repo
  });
}
