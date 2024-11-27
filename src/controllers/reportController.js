const Report = require('../models/Report');

// Função para criar um relatório
exports.createReport = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newReport = new Report({ title, description });
    await newReport.save();
    res.status(201).json(newReport);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Função para listar relatórios
exports.listReports = async (req, res) => {
  try {
    const reports = await Report.find();
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
