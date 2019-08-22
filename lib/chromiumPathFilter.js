module.exports = function chromiumPathFilter (s) {
  return s.length > 0 &&
    !s.startsWith('chrome/app/theme/default') &&
    !s.startsWith('chrome/app/theme/brave') &&
    !s.startsWith('chrome/app/theme/chromium') &&
    !s.endsWith('.png') && !s.endsWith('.xtb') &&
    !s.endsWith('.grd') && !s.endsWith('.grdp') &&
    !s.includes('google_update_idl')
}