SELECT DeviceOS, COUNT(DeviceOS) as total_DeviceOS FROM Experiences GROUP BY DeviceOS ORDER BY total_DeviceOS