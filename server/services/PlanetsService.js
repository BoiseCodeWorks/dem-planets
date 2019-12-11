import mongoose from "mongoose";
import Planet from "../models/Planet";

const _repository = mongoose.model("Planet", Planet);

class PlanetsService {
  async getAll() {
    return await _repository.find({});
  }
  async getById(id) {
    return await _repository.findById(id);
  }

  async getPlanetsByStarId(starId) {
    return await _repository.find({ starId: starId });
  }
  async getPlanetsByGalaxyId(galaxyId) {
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

const planetsService = new PlanetsService();
export default planetsService;
