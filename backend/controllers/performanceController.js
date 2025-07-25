import Performance from '../models/performance.js';

export const createPerformance = async (req, res) => {
    try {
        const performance = new Performance(req.body);
        const savedPerformance = await performance.save();
        res.status(201).json({
            success: true,
            message: "performance profile created successfully",
            data: savedPerformance
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to create performance",
            error: error.message
        });
    }
};

export const getPerformances = async (req, res) => {
    try {
        const performances = await Performance.find()
            .populate('employeeId', 'name email')  // populate employee user info (customize as per User schema)
            .populate('reviewerId', 'name email'); // populate reviewer user info
        res.json(performances);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getPerformanceById = async (req, res) => {
    try {
        const performance = await Performance.findById(req.params.id)
            .populate('employeeId', 'name email')
            .populate('reviewerId', 'name email');

        if (!performance) return res.status(404).json({ message: 'Performance review not found' });

        res.json(performance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updatePerformance = async (req, res) => {
    try {
        const updatedPerformance = await Performance.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                updatedAt: Date.now()
            },
            { new: true, runValidators: true }
        );

        if (!updatedPerformance) return res.status(404).json({ message: 'Performance review not found' });

        res.json(updatedPerformance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deletePerformance = async (req, res) => {
    try {
        const deletedPerformance = await Performance.findByIdAndDelete(req.params.id);

        if (!deletedPerformance) return res.status(404).json({ message: 'Performance review not found' });

        res.json({ message: 'Performance review deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

