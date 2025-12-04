"use client";

import {useState, useMemo} from "react";
import {motion} from "framer-motion";
import {
  MapPin,
  Calendar,
  Clock,
  ArrowLeftRight,
  IndianRupee,
  Ticket,
  CheckCircle2,
  Navigation,
  Timer
} from "lucide-react";

type PassType = "daily" | "weekdays" | "weekends" | "weekly";
type DayOfWeek =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export default function ZPassPage() {
  const [formData, setFormData] = useState({
    pickupLocation: "",
    dropLocation: "",
    distance: "",
    startDate: "",
    endDate: "",
    passType: "daily" as PassType,
    weeklyDay: "monday" as DayOfWeek,
    isReturn: false,
    pickupTime: "",
    returnPickupTime: ""
  });

  const RATE_PER_KM = 10;
  const AVERAGE_SPEED = 40; // km/h for time estimation

  // Calculate total days between dates
  const calculateDays = (start: string, end: string) => {
    if (!start || !end) return 0;
    const startDate = new Date(start);
    const endDate = new Date(end);
    const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    return diffDays;
  };

  // Count weekdays and weekends in date range
  const countDayTypes = (start: string, end: string) => {
    if (!start || !end) return {weekdays: 0, weekends: 0};

    const startDate = new Date(start);
    const endDate = new Date(end);
    let weekdays = 0;
    let weekends = 0;

    const current = new Date(startDate);
    while (current <= endDate) {
      const day = current.getDay();
      if (day === 0 || day === 6) {
        weekends++;
      } else {
        weekdays++;
      }
      current.setDate(current.getDate() + 1);
    }

    return {weekdays, weekends};
  };

  // Count specific day of week in date range
  const countSpecificDay = (
    start: string,
    end: string,
    targetDay: DayOfWeek
  ) => {
    if (!start || !end) return 0;

    const dayMap: Record<DayOfWeek, number> = {
      sunday: 0,
      monday: 1,
      tuesday: 2,
      wednesday: 3,
      thursday: 4,
      friday: 5,
      saturday: 6
    };

    const startDate = new Date(start);
    const endDate = new Date(end);
    let count = 0;

    const current = new Date(startDate);
    while (current <= endDate) {
      if (current.getDay() === dayMap[targetDay]) {
        count++;
      }
      current.setDate(current.getDate() + 1);
    }

    return count;
  };

  // Calculate applicable days based on pass type
  const getApplicableDays = (
    passType: PassType,
    start: string,
    end: string,
    weeklyDay?: DayOfWeek
  ) => {
    const totalDays = calculateDays(start, end);
    const {weekdays, weekends} = countDayTypes(start, end);

    switch (passType) {
      case "daily":
        return totalDays;
      case "weekdays":
        return weekdays;
      case "weekends":
        return weekends;
      case "weekly":
        return weeklyDay
          ? countSpecificDay(start, end, weeklyDay)
          : Math.ceil(totalDays / 7);
      default:
        return totalDays;
    }
  };

  // Memoized calculations
  const calculatedPrice = useMemo(() => {
    const distance = parseFloat(formData.distance) || 0;

    // Calculate applicable days based on pass type
    const totalDays = calculateDays(formData.startDate, formData.endDate);
    const {weekdays, weekends} = countDayTypes(
      formData.startDate,
      formData.endDate
    );

    let days = totalDays;
    switch (formData.passType) {
      case "daily":
        days = totalDays;
        break;
      case "weekdays":
        days = weekdays;
        break;
      case "weekends":
        days = weekends;
        break;
      case "weekly":
        days = countSpecificDay(
          formData.startDate,
          formData.endDate,
          formData.weeklyDay
        );
        break;
      default:
        days = totalDays;
    }

    let totalKm = distance * days;
    if (formData.isReturn) {
      totalKm *= 2;
    }

    return totalKm * RATE_PER_KM;
  }, [
    formData.distance,
    formData.startDate,
    formData.endDate,
    formData.isReturn,
    formData.passType,
    formData.weeklyDay
  ]);

  const estimatedDropTime = useMemo(() => {
    const distance = parseFloat(formData.distance) || 0;
    if (!formData.pickupTime || !distance) return "";

    const [hours, minutes] = formData.pickupTime.split(":").map(Number);
    const travelTimeHours = distance / AVERAGE_SPEED;
    const travelTimeMinutes = Math.round(travelTimeHours * 60);

    const totalMinutes = hours * 60 + minutes + travelTimeMinutes;
    const dropHours = Math.floor(totalMinutes / 60) % 24;
    const dropMinutes = totalMinutes % 60;

    return `${String(dropHours).padStart(2, "0")}:${String(
      dropMinutes
    ).padStart(2, "0")}`;
  }, [formData.pickupTime, formData.distance]);

  const estimatedReturnDropTime = useMemo(() => {
    const distance = parseFloat(formData.distance) || 0;
    if (!formData.isReturn || !formData.returnPickupTime || !distance)
      return "";

    const [hours, minutes] = formData.returnPickupTime.split(":").map(Number);
    const travelTimeHours = distance / AVERAGE_SPEED;
    const travelTimeMinutes = Math.round(travelTimeHours * 60);

    const totalMinutes = hours * 60 + minutes + travelTimeMinutes;
    const dropHours = Math.floor(totalMinutes / 60) % 24;
    const dropMinutes = totalMinutes % 60;

    return `${String(dropHours).padStart(2, "0")}:${String(
      dropMinutes
    ).padStart(2, "0")}`;
  }, [formData.isReturn, formData.returnPickupTime, formData.distance]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value, type, checked} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handlePassTypeChange = (type: PassType) => {
    setFormData((prev) => ({...prev, passType: type}));
  };

  const handleWeeklyDayChange = (day: DayOfWeek) => {
    setFormData((prev) => ({...prev, weeklyDay: day}));
  };

  const handlePurchase = () => {
    // Validation
    if (
      !formData.pickupLocation ||
      !formData.dropLocation ||
      !formData.distance ||
      !formData.startDate ||
      !formData.endDate ||
      !formData.pickupTime
    ) {
      alert("Please fill in all required fields!");
      return;
    }

    if (formData.isReturn && !formData.returnPickupTime) {
      alert("Please provide return pickup time!");
      return;
    }

    const applicableDays = getApplicableDays(
      formData.passType,
      formData.startDate,
      formData.endDate,
      formData.weeklyDay
    );
    const totalDays = calculateDays(formData.startDate, formData.endDate);

    let passTypeDescription = "";
    switch (formData.passType) {
      case "daily":
        passTypeDescription = "Daily Pass - All Days";
        break;
      case "weekdays":
        passTypeDescription = "Weekdays Only (Mon-Fri)";
        break;
      case "weekends":
        passTypeDescription = "Weekends Only (Sat-Sun)";
        break;
      case "weekly":
        passTypeDescription = `Weekly Pass - Every ${
          formData.weeklyDay.charAt(0).toUpperCase() +
          formData.weeklyDay.slice(1)
        }`;
        break;
    }

    // Show success message (will be replaced with actual payment integration)
    alert(`ZPass Purchase Summary:
    
Route: ${formData.pickupLocation} ↔ ${formData.dropLocation}
Distance: ${formData.distance} km ${
      formData.isReturn ? "(Round Trip)" : "(One Way)"
    }
Pass Type: ${passTypeDescription}
Duration: ${formData.startDate} to ${formData.endDate}
Total Days in Range: ${totalDays}
Applicable Days: ${applicableDays}
Pickup Time: ${formData.pickupTime}${
      formData.isReturn ? `\nReturn Pickup: ${formData.returnPickupTime}` : ""
    }
Total Amount: ₹${calculatedPrice.toLocaleString("en-IN")}

Your pass will be activated shortly!`);
  };

  return (
    <main className="min-h-screen bg-linear-to-br from-emerald-50 via-white to-teal-50">
      {/* Animated Background */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold flex items-center gap-2">
              <Ticket className="h-4 w-4" />
              ZPass - Daily Rides
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Get Your ZPass
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Travel daily between your favorite destinations with our affordable
            ZPass system
          </p>
        </motion.div>

        {/* Main Form Card */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.2}}
          className="bg-white rounded-3xl shadow-2xl shadow-emerald-500/10 p-6 sm:p-8 lg:p-10 border border-gray-100"
        >
          <div className="space-y-6">
            {/* Location Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Pickup Location */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-emerald-500" />
                    Pickup Location
                  </div>
                </label>
                <input
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleInputChange}
                  placeholder="Enter pickup location"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition text-gray-900 placeholder:text-gray-400"
                />
              </div>

              {/* Drop Location */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Navigation className="h-4 w-4 text-teal-500" />
                    Drop Location
                  </div>
                </label>
                <input
                  type="text"
                  name="dropLocation"
                  value={formData.dropLocation}
                  onChange={handleInputChange}
                  placeholder="Enter drop location"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Distance */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <div className="flex items-center gap-2">
                  <ArrowLeftRight className="h-4 w-4 text-emerald-500" />
                  Distance (in kilometers)
                </div>
              </label>
              <input
                type="number"
                name="distance"
                value={formData.distance}
                onChange={handleInputChange}
                placeholder="Enter distance in km"
                min="0"
                step="0.1"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition text-gray-900 placeholder:text-gray-400"
              />
            </div>

            {/* Pass Type Selection */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                <div className="flex items-center gap-2">
                  <Ticket className="h-4 w-4 text-emerald-500" />
                  Pass Type
                </div>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  {type: "daily" as PassType, label: "Daily", desc: "All days"},
                  {
                    type: "weekdays" as PassType,
                    label: "Weekdays",
                    desc: "Mon-Fri"
                  },
                  {
                    type: "weekends" as PassType,
                    label: "Weekends",
                    desc: "Sat-Sun"
                  },
                  {
                    type: "weekly" as PassType,
                    label: "Weekly",
                    desc: "Specific day"
                  }
                ].map((option) => (
                  <button
                    key={option.type}
                    type="button"
                    onClick={() => handlePassTypeChange(option.type)}
                    className={`cursor-pointer p-4 rounded-xl border-2 transition-all ${
                      formData.passType === option.type
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                        : "border-gray-200 hover:border-emerald-300 text-gray-700"
                    }`}
                  >
                    <div className="font-semibold text-sm">{option.label}</div>
                    <div className="text-xs mt-1 opacity-75">{option.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Weekly Day Selection */}
            {formData.passType === "weekly" && (
              <motion.div
                initial={{opacity: 0, height: 0}}
                animate={{opacity: 1, height: "auto"}}
                transition={{duration: 0.3}}
              >
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-emerald-500" />
                    Select Day of Week
                  </div>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                  {[
                    {day: "monday" as DayOfWeek, label: "Mon"},
                    {day: "tuesday" as DayOfWeek, label: "Tue"},
                    {day: "wednesday" as DayOfWeek, label: "Wed"},
                    {day: "thursday" as DayOfWeek, label: "Thu"},
                    {day: "friday" as DayOfWeek, label: "Fri"},
                    {day: "saturday" as DayOfWeek, label: "Sat"},
                    {day: "sunday" as DayOfWeek, label: "Sun"}
                  ].map((option) => (
                    <button
                      key={option.day}
                      type="button"
                      onClick={() => handleWeeklyDayChange(option.day)}
                      className={`cursor-pointer p-3 rounded-lg border-2 transition-all ${
                        formData.weeklyDay === option.day
                          ? "border-teal-500 bg-teal-50 text-teal-700 font-semibold"
                          : "border-gray-200 hover:border-teal-300 text-gray-700"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Date Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Start Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-emerald-500" />
                    Pass Start Date
                  </div>
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition text-gray-900 cursor-pointer text-base [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:w-5 [&::-webkit-calendar-picker-indicator]:h-5"
                  style={{colorScheme: "light"}}
                />
              </div>

              {/* End Date */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-teal-500" />
                    Pass End Date
                  </div>
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  min={
                    formData.startDate || new Date().toISOString().split("T")[0]
                  }
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition text-gray-900 cursor-pointer text-base [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:w-5 [&::-webkit-calendar-picker-indicator]:h-5"
                  style={{colorScheme: "light"}}
                />
              </div>
            </div>

            {/* Pass Summary Info */}
            {formData.startDate && formData.endDate && (
              <motion.div
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                className="bg-linear-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border-2 border-emerald-200"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-emerald-700 font-semibold">
                      Total Days
                    </div>
                    <div className="text-emerald-900 text-lg font-bold">
                      {calculateDays(formData.startDate, formData.endDate)}
                    </div>
                  </div>
                  {formData.passType === "weekdays" && (
                    <div>
                      <div className="text-emerald-700 font-semibold">
                        Weekdays
                      </div>
                      <div className="text-emerald-900 text-lg font-bold">
                        {
                          countDayTypes(formData.startDate, formData.endDate)
                            .weekdays
                        }
                      </div>
                    </div>
                  )}
                  {formData.passType === "weekends" && (
                    <div>
                      <div className="text-emerald-700 font-semibold">
                        Weekends
                      </div>
                      <div className="text-emerald-900 text-lg font-bold">
                        {
                          countDayTypes(formData.startDate, formData.endDate)
                            .weekends
                        }
                      </div>
                    </div>
                  )}
                  {formData.passType === "weekly" && (
                    <div>
                      <div className="text-teal-700 font-semibold">
                        {formData.weeklyDay.charAt(0).toUpperCase() +
                          formData.weeklyDay.slice(1)}
                        s
                      </div>
                      <div className="text-teal-900 text-lg font-bold">
                        {countSpecificDay(
                          formData.startDate,
                          formData.endDate,
                          formData.weeklyDay
                        )}
                      </div>
                    </div>
                  )}
                  <div>
                    <div className="text-teal-700 font-semibold">
                      Applicable Days
                    </div>
                    <div className="text-teal-900 text-lg font-bold">
                      {getApplicableDays(
                        formData.passType,
                        formData.startDate,
                        formData.endDate,
                        formData.weeklyDay
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Return Trip Toggle */}
            <div className="bg-linear-to-r from-emerald-50 to-teal-50 rounded-xl p-5 border-2 border-emerald-100">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="isReturn"
                  checked={formData.isReturn}
                  onChange={handleInputChange}
                  className="w-6 h-6 text-emerald-600 border-2 border-emerald-400 rounded focus:ring-emerald-500 cursor-pointer accent-emerald-600"
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 group-hover:text-emerald-600 transition">
                    Return Trip (Round Trip)
                  </div>
                  <div className="text-sm text-gray-600">
                    Select this if you need to return from the drop location
                    daily
                  </div>
                </div>
              </label>
            </div>

            {/* Pickup Times */}
            <div
              className={`grid grid-cols-1 ${
                formData.isReturn ? "md:grid-cols-2" : ""
              } gap-6`}
            >
              {/* Pickup Time (Going) */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-emerald-500" />
                    Pickup Time (Going)
                  </div>
                </label>
                <input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition text-gray-900 cursor-pointer text-base [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:w-5 [&::-webkit-calendar-picker-indicator]:h-5"
                  style={{colorScheme: "light"}}
                  required
                />
                <p className="text-xs text-gray-500 mt-1.5">
                  Click clock icon to select time
                </p>
              </div>

              {/* Return Pickup Time */}
              {formData.isReturn && (
                <motion.div
                  initial={{opacity: 0, x: -20}}
                  animate={{opacity: 1, x: 0}}
                  transition={{duration: 0.4}}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-teal-500" />
                      Pickup Time (Return)
                    </div>
                  </label>
                  <input
                    type="time"
                    name="returnPickupTime"
                    value={formData.returnPickupTime}
                    onChange={handleInputChange}
                    min={estimatedDropTime || formData.pickupTime}
                    className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 outline-none transition text-gray-900 cursor-pointer text-base [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:w-5 [&::-webkit-calendar-picker-indicator]:h-5"
                    style={{colorScheme: "light"}}
                    required
                  />
                  <p className="text-xs text-teal-600 mt-1.5">
                    Must be after estimated drop time
                    {estimatedDropTime && ` (${estimatedDropTime})`}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Estimated Drop Times */}
            {estimatedDropTime && (
              <div
                className={`grid grid-cols-1 ${
                  formData.isReturn && estimatedReturnDropTime
                    ? "md:grid-cols-2"
                    : ""
                } gap-6`}
              >
                {/* Estimated Drop Time (Going) */}
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Timer className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm font-semibold text-emerald-700">
                      Estimated Drop Time (Going)
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-emerald-700">
                    {estimatedDropTime}
                  </div>
                  <div className="text-xs text-emerald-600 mt-1">
                    Based on average speed of {AVERAGE_SPEED} km/h
                  </div>
                </div>

                {/* Estimated Drop Time (Return) */}
                {formData.isReturn && estimatedReturnDropTime && (
                  <motion.div
                    initial={{opacity: 0, x: -20}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.4}}
                    className="bg-teal-50 rounded-xl p-4 border border-teal-200"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Timer className="h-4 w-4 text-teal-600" />
                      <span className="text-sm font-semibold text-teal-700">
                        Estimated Drop Time (Return)
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-teal-700">
                      {estimatedReturnDropTime}
                    </div>
                    <div className="text-xs text-teal-600 mt-1">
                      Based on average speed of {AVERAGE_SPEED} km/h
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Price Summary */}
            {calculatedPrice > 0 && (
              <motion.div
                initial={{opacity: 0, scale: 0.95}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
                className="bg-linear-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-sm opacity-90 mb-1">
                      Total Pass Price
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="h-8 w-8" />
                      <span className="text-4xl sm:text-5xl font-bold">
                        {calculatedPrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm opacity-90">Applicable Days</div>
                    <div className="text-2xl font-bold">
                      {getApplicableDays(
                        formData.passType,
                        formData.startDate,
                        formData.endDate,
                        formData.weeklyDay
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-4 space-y-2 text-sm">
                  <div className="flex justify-between opacity-90">
                    <span>Distance per trip:</span>
                    <span>{formData.distance} km</span>
                  </div>
                  <div className="flex justify-between opacity-90">
                    <span>Trip type:</span>
                    <span>
                      {formData.isReturn
                        ? "Round Trip (2x distance)"
                        : "One Way"}
                    </span>
                  </div>
                  <div className="flex justify-between opacity-90">
                    <span>Pass type:</span>
                    <span>
                      {formData.passType === "daily" && "Daily (All Days)"}
                      {formData.passType === "weekdays" && "Weekdays Only"}
                      {formData.passType === "weekends" && "Weekends Only"}
                      {formData.passType === "weekly" &&
                        `Every ${
                          formData.weeklyDay.charAt(0).toUpperCase() +
                          formData.weeklyDay.slice(1)
                        }`}
                    </span>
                  </div>
                  <div className="flex justify-between opacity-90">
                    <span>Rate:</span>
                    <span>₹{RATE_PER_KM}/km</span>
                  </div>
                  <div className="flex justify-between font-semibold text-base pt-2 border-t border-white/20">
                    <span>Total Distance:</span>
                    <span>
                      {(
                        parseFloat(formData.distance || "0") *
                        getApplicableDays(
                          formData.passType,
                          formData.startDate,
                          formData.endDate,
                          formData.weeklyDay
                        ) *
                        (formData.isReturn ? 2 : 1)
                      ).toFixed(1)}{" "}
                      km
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Purchase Button */}
            <motion.button
              whileHover={{scale: 1.02}}
              whileTap={{scale: 0.98}}
              onClick={handlePurchase}
              className="cursor-pointer w-full bg-linear-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl py-4 px-8 font-bold text-lg shadow-lg shadow-emerald-500/30 transition-all flex items-center justify-center gap-3"
            >
              <CheckCircle2 className="h-6 w-6" />
              Purchase ZPass
            </motion.button>

            {/* Info Text */}
            <div className="text-center text-sm text-gray-500 pt-2">
              Your pass will be activated immediately after payment confirmation
            </div>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.4}}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <IndianRupee className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Save Money</h3>
            <p className="text-sm text-gray-600">
              Get the best rates for regular commutes
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Guaranteed Rides</h3>
            <p className="text-sm text-gray-600">
              Your ride is always confirmed at scheduled time
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Ticket className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Flexible Duration</h3>
            <p className="text-sm text-gray-600">
              Choose any date range that suits you
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
