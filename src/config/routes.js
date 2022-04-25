export const AppRoutes = {
  bundles: {
    pathPattern: 'bundles',
    parent: '/',
    label: 'Home',
    children:
      {
        bundleChunks: {
          pathPattern: ':bundleName/chunks',
          label: 'Bundles',
          children: {
            chunk: {
              pathPattern: ':chunkOrder',
              label: 'Chunks',
              paramNames: [':bundleName'],
              children: {
                memorization: {
                  pathPattern: 'words/:wordOrder',
                  label: 'Chunk',
                  paramNames: [':bundleName', ':chunkOrder']
                }
              }
            }
          }
        }
      }

  }
}

// TODO improvement - we could get the param names by applying regexp on pathPattern

// returns: `path: { breadcrumbUrl: '', label: '', paramNames: ['', ...] }`
export function buildBreadcrumbsTree(startNode, matchTree = {}, parentPath = '', segments = []) {
  const { pathPattern, label, children, paramNames = [] } = startNode;
  const prefixPath = `${parentPath}/${pathPattern}`;

  if (children) {
    Object.keys(children).forEach(childNode => {
      buildBreadcrumbsTree(children[childNode], matchTree, prefixPath, [...segments, ...(paramNames || [])]);
    });
  }

  matchTree[prefixPath] = {
    label,
    paramNames: [...segments, ...paramNames],
    breadcrumbUrl: parentPath
  }

  return matchTree;
}
