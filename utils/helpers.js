import mongoose from "mongoose"

export const asyncWrapper = fn => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      res.status(500).json({ status: 'failed', message: error.message })
    }
  }
}

export const isValid = (id) => {
  if (mongoose.Types.ObjectId.isValid(id)) {
    return true
  }
  return false
}