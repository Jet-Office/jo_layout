import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const navigateWithScrollTop = (to: string) => {
    navigate(to);
    window.scrollTo(0, 0);
  };

  return null;
}

export default ScrollToTop;
