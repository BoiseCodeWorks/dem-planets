import express from "express";
import galaxiesService from "../services/GalaxiesService";
import starsService from "../services/StarsService";
import planetsService from "../services/PlanetsService";

export default class GalaxiesController {
  constructor() {
    this.router = express
      .Router()
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/stars", this.getStarsByGalaxyId)
      .get("/:id/planets", this.getPlanetsByGalaxyId)
      .post("", this.create);
  }

  async getAll(req, res, next) {
    try {
      let data = await galaxiesService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getById(req, res, next) {
    try {
      let data = await galaxiesService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async getStarsByGalaxyId(req, res, next) {
    try {
      let data = await starsService.getStarsByGalaxyId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getPlanetsByGalaxyId(req, res, next) {
    try {
      let data = await planetsService.getPlanetsByGalaxyId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await galaxiesService.create(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
