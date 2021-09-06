const IndexController = {
  get(req, res, next) {
    res.status(200).send({
      message: 'Valid IP address',
      success: true,
    });
  },
};

export default IndexController;
