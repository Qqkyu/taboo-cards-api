export const languageCheck = async (req, res, next) => {
  const languageQueryParam = req.query.language;
  if (languageQueryParam) {
    if (languageQueryParam != "pl" && languageQueryParam != "en") {
      return res
        .status(422)
        .json({ message: `Invalid language param: '${languageQueryParam}'` });
    }
  }
  next();
};
