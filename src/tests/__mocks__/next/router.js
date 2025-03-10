module.exports = {
    useRouter: jest.fn().mockReturnValue({
      push: jest.fn(),
      query: {},
      asPath: '',
      pathname: '',
    }),
};