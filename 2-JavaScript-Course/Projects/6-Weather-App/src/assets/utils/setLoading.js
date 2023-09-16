/**
 * Shows or hides the loading spinner
 * @param {Boolean} isLoading
 */
export default function setLoading(isLoading) {
  const loading = document.querySelector('.loading');
  loading.classList.toggle('loading--active', isLoading);
}

