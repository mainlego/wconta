export const isSafari = (): boolean => {
  const userAgent = navigator.userAgent.toLowerCase();
  const vendor = navigator.vendor?.toLowerCase() || '';
  
  // Check for Safari browser (not Chrome/Edge on Safari engine)
  const isSafariBrowser = vendor.includes('apple') && 
                          userAgent.includes('safari') && 
                          !userAgent.includes('chrome') && 
                          !userAgent.includes('edg');
  
  // Check for iOS devices (iPhone, iPad, iPod)
  const isIOS = /iphone|ipad|ipod/.test(userAgent) || 
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  
  return isSafariBrowser || isIOS;
};