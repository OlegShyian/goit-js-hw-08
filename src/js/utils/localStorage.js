export function getFromLS(key, defaultValue) {
  const value = localStorage.getItem(key);

  try {
    return value ? JSON.parse(value) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

export function setToLS(key, value) {
  localStorage.setItem(
    key,
    typeof value === 'string' ? value : JSON.stringify(value)
  );
}

export const removeFromLS = key => {
  localStorage.removeItem(key);
};
