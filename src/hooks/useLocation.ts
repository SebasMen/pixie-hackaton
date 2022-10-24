const useLocation = () => {
  const getUserLocation = async (): Promise<[number, number]> =>
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          resolve([coords.longitude, coords.latitude]);
        },
        err => {
          console.log('no se puede obtener la geolocalizacion');
          console.log(err);
          reject();
        }
      );
    });

  return { getUserLocation };
};

export default useLocation;
