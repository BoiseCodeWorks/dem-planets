import mongoose from "mongoose";
import Star from "../models/Star";

const _repository = mongoose.model("Star", Star);

class StarsService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    return await _repository.findById(id);
  }
  //NOTE services can get their own data
  async getStarsByGalaxyId(galaxyId) {
    return await _repository.find({ galaxyId: galaxyId });
  }

  async create(rawData) {
    return await _repository.create(rawData);
  }

  async edit(id, update) {
    let data = await _repository.findOneAndUpdate({ _id: id }, update, {
      new: true
    });
    if (!data) {
      throw new Error("Invalid Update Id");
    }
    return data;
  }

  async delete(id) {
    let data = await _repository.findOneAndRemove(id);
    if (!data) {
      throw new Error("Invalid Update Id");
    }
  }
}

const starsService = new StarsService();
export default starsService;
