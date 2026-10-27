import { useCallback, useEffect, useState } from 'react';
import { pathToRoute, routeToPath, type RouteId } from '@/lib/routes';

function currentPath(): string {
  const hash = window.location.hash.replace(/^#/, '');
  return hash || '/';
}

export function useRouter() {
  const [route, setRoute] = useState<RouteId>(() => pathToRoute(currentPath()));

  useEffect(() => {
    const onChange = () => setRoute(pathToRoute(currentPath()));
    window.addEventListener('hashchange', onChange);
    window.addEventListener('popstate', onChange);
    return () => {
      window.removeEventListener('hashchange', onChange);
      window.removeEventListener('popstate', onChange);
    };
  }, []);

  const navigate = useCallback((id: RouteId) => {
    const path = routeToPath(id);
    if (currentPath() !== path) {
      // pushState avoids hash-anchor handlers that treat "#/route" as a CSS selector.
      window.history.pushState(null, '', `#${path}`);
      setRoute(pathToRoute(path));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { route, navigate };
}

export type NavigateFn = (id: RouteId) => void;
