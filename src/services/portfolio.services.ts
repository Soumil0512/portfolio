import PortfolioModel from "@/models/portfolio";
import { Portfolio } from "@/types";

export async function getPortfolio(): Promise<Portfolio | null> {
  const portfolio: Portfolio | null = await PortfolioModel.findOne({});
  return portfolio;
}

export async function createOrUpdatePortfolio(
  portfolioBody: Portfolio
): Promise<Portfolio> {
  const existingPortfolio = await PortfolioModel.findOne({});

  if (existingPortfolio) {
    const modifiedPortfolio = await PortfolioModel.findOneAndUpdate(
      {},
      { $set: portfolioBody },
      { new: true }
    );

    return modifiedPortfolio;
  }

  const newPortfolio = new PortfolioModel(portfolioBody);

  await newPortfolio.save();

  return newPortfolio;
}
