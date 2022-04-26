import './Breadcrumbs.scss';
import { Link, useLocation, matchRoutes, generatePath } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AppRoutes, buildBreadcrumbsTree } from '../../config/routes';

const Breadcrumbs = (props) => {
  const location = useLocation();
  const [breadcrumb, setBreadcrumb] = useState(composeBreadcrumb(props.name, props.path));

  const breadcrumbsTree = buildBreadcrumbsTree(AppRoutes.bundles);
  const breadcrumbsRoutes = Object.keys(breadcrumbsTree).map(path => ({ path }));

  useEffect(() => {
    const [matchedBreadcrumbUrl] = matchRoutes(breadcrumbsRoutes, location) || [];
    if (matchedBreadcrumbUrl) {
      const breadcrumb = breadcrumbsTree[matchedBreadcrumbUrl.route.path];
      const routeParams = extractRouteParams(matchedBreadcrumbUrl, breadcrumb);

      setBreadcrumb(composeBreadcrumb(breadcrumb.label, generatePath(breadcrumb.breadcrumbUrl, routeParams)));
    }

  }, [location]);

  function composeBreadcrumb(name, path) {
    return { name, path };
  }

  // returns: `{[routeParamName]: routeParamValue}`
  function extractRouteParams({ params }, breadcrumb) {
    const routeParams = {};

    (breadcrumb.paramNames || []).map(param => param.slice(1))
      .forEach(param => {
        if (params[param]) {
          routeParams[param] = params[param];
        }
      });

    return routeParams;
  }

  return <>
    {breadcrumb &&
      <div>
        Breadcrumbs: <Link to={breadcrumb.path} state={breadcrumb.params}>{breadcrumb.name}</Link>
      </div>
    }
  </>
};

export default Breadcrumbs;