export default {
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        // results: {
        //   items: [
        //     {
        //       volumeInfo: { title: "test" }
        //     }
        //   ]
        // }
      }
    })
  )
};
