import express from "express";
import planetsService from "../services/PlanetsService";

export default class PlanetsController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      //.get("/:id/planets", this.getPlanetsByStarId)
      .post("", this.create);
  }

  async getAll(req, res, next) {
    try {
      let data = await planetsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await planetsService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  //   async getPlanetsByStarId(req, res, next) {
  //     try {
  //       let data = await planetsService.getPlanetsByStarId(req.params.id);
  //       return res.send(data);
  //     } catch (error) {
  //       next(error);
  //     }
  //   }

  async create(req, res, next) {
    try {
      let data = await planetsService.create(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
