export function accessController(module: string): { section: string; actions: string[] } {
  const storage = localStorage.getItem('roles');
  const permissons: { section: string; actions: string[] }[] = ['null', 'undefined'].includes(typeof storage)
    ? []
    : JSON.parse(storage ? storage : '');

  const _section = permissons.find((p) => p.section === module);
  const section = _section
    ? _section
    : {
        section: '',
        actions: []
      };
  return section;
}
