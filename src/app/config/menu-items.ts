export class NavigationItem {
  icon: any;
  title: string='';
  link: string='';
  id:number=0;
}
export const defaultMenuItems: NavigationItem [] =
  [
    {
      title: 'Home',
      icon: '',
      link: '/',
      id:1,
    },
    {
      title: 'Color Models',
      icon: '',
      link: '/color-models',
      id:2,
    },
    {
      title: 'Digital Images',
      icon: '',
      link: '/digital-images',
      id:3,
    },
    {
      title: 'AI Gallery',
      icon: '',
      link: '/ai-gallery-images',
      id:4,
    },
    {
      title: 'About',
      icon: '',
      link: '/about',
      id:5,
    },
  ] as NavigationItem[];
