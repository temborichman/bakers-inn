"use client"

import { useState } from "react"
import Image from "next/image"
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Button,
  Dialog,
  TextField,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
} from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"

const FactoryTour = () => {
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({
      organizationName: "",
      contactName: "",
      address: "",
      town: "",
      telephone: "",
      email: "",
      visitDate: null,
      participants: "",
      ageRange: "",
      hasAuthorization: false,
      hasReadSafety: false,
    })
  
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        handleClose();
      };
      

  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 md:p-25 shadow-lg">
      {/* Left Side: Text and Button */}
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-4xl md:text-3xl font-bold text-[#2d1a75]">Book A Factory Tour</h2>
        <p className="text-[#2d1a75]">
          Keep on seeing how Baker&apos;s Inn products are made? Are you interested in a field trip day for your
          school&apos;s class? Get in touch with us to book a tour of our factory that is closest to you. Fill in the
          booking form and we will get back to you.
        </p>
        <Button
        variant="contained"
        onClick={handleOpen}
        sx={{ backgroundColor: "#b2904c", "&:hover": { backgroundColor: "#5A2E0C" } }}
      >
        BOOK FACTORY TOUR
      </Button>
      </div>

      {/* Right Side: Image */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <Image
          src="/images/factorybread.png"
          alt="Factory Tour"
          width={500}
          height={300}
          className="rounded-lg shadow-md"
        />
      </div>

      {/* Booking Form Dialog */}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        style: {
          borderRadius: "8px",
          maxWidth: "800px",
        },
      }}
    >
      <div className="relative">
        <div className="bg-[#fff] text-#261b6c py-4 text-center font-bold text-2xl relative">
          Book A Factory Tour
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
              bgcolor: "#2e1a7a",
              border: "2px solid white",
              borderRadius: "50%",
              padding: "4px",
              "&:hover": {
                bgcolor: "#231561",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <TextField
                placeholder="Name of Organisation"
                fullWidth
                variant="outlined"
                InputProps={{
                  sx: {
                    backgroundColor: "#f8f6e9",
                    borderRadius: "4px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  },
                }}
              />

              <TextField
                placeholder="Name of Contact Person"
                fullWidth
                variant="outlined"
                InputProps={{
                  sx: {
                    backgroundColor: "#f8f6e9",
                    borderRadius: "4px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  },
                }}
              />

              <TextField
                placeholder="Organization Address"
                fullWidth
                variant="outlined"
                InputProps={{
                  sx: {
                    backgroundColor: "#f8f6e9",
                    borderRadius: "4px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  },
                }}
              />

              <TextField
                placeholder="Organization's Resident Town"
                fullWidth
                variant="outlined"
                InputProps={{
                  sx: {
                    backgroundColor: "#f8f6e9",
                    borderRadius: "4px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  },
                }}
              />

              <TextField
                placeholder="Contact Person's Telephone"
                fullWidth
                variant="outlined"
                InputProps={{
                  sx: {
                    backgroundColor: "#f8f6e9",
                    borderRadius: "4px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  },
                }}
              />

              <TextField
                placeholder="Contact Person's E-mail"
                fullWidth
                variant="outlined"
                InputProps={{
                  sx: {
                    backgroundColor: "#f8f6e9",
                    borderRadius: "4px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  },
                }}
              />

              <TextField
                placeholder="Date of Visit"
                fullWidth
                variant="outlined"
                InputProps={{
                  sx: {
                    backgroundColor: "#f8f6e9",
                    borderRadius: "4px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "transparent",
                    },
                  },
                }}
              />

              <Select
                displayEmpty
                value=""
                renderValue={() => "Number of Participants"}
                IconComponent={KeyboardArrowDownIcon}
                sx={{
                  backgroundColor: "#f8f6e9",
                  borderRadius: "4px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="1-5">1-5</MenuItem>
                <MenuItem value="6-10">6-10</MenuItem>
                <MenuItem value="11-20">11-20</MenuItem>
                <MenuItem value="21-30">21-30</MenuItem>
                <MenuItem value="31+">31+</MenuItem>
              </Select>
            </div>

            <div className="mt-4">
              <Select
                displayEmpty
                value=""
                renderValue={() => "Age Range of Participants"}
                IconComponent={KeyboardArrowDownIcon}
                fullWidth
                sx={{
                  backgroundColor: "#f8f6e9",
                  borderRadius: "4px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "transparent",
                  },
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="5-10">5-10 years</MenuItem>
                <MenuItem value="11-15">11-15 years</MenuItem>
                <MenuItem value="16-18">16-18 years</MenuItem>
                <MenuItem value="19+">19+ years</MenuItem>
              </Select>
            </div>

            <div className="mt-6 flex text-center items-center">
              <div className="text-sm">
                <span className="text-purple-900">Plant Visit </span>
                <a href="#" className="text-purple-900 underline">
                  Terms & Conditions
                </a>
              </div>
              <div className="text-sm ml-auto">
                <span className="text-purple-900">Plant Visit </span>
                <a href="#" className="text-purple-900 underline">
                  Safety Regulations
                </a>
              </div>
            </div>

            <p className="text-sm text-gray-700 my-4">
              Your organisation has agreed to the submission of this application and you have authorisation to submit
              it. The information you have provided on behalf of your organisation is accurate, full and correct.
            </p>

            <FormControlLabel
  control={
    <Checkbox
      checked={formData.hasReadSafety} // ✅ Use formData.hasReadSafety instead of hasReadSafety
      onChange={(e) => setFormData({ ...formData, hasReadSafety: e.target.checked })}
      sx={{
        color: "#666",
        "&.Mui-checked": {
          color: "#666",
        },
      }}
    />
  }
  label="Have Read The Safety Regulations"
  sx={{
    "& .MuiFormControlLabel-label": {
      fontSize: "0.875rem",
      color: "#666",
    },
  }}
/>





            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
                backgroundColor: "#b2904c",
                color: "white",
                fontWeight: "bold",
                padding: "12px",
                "&:hover": {
                  backgroundColor: "#9a7c40",
                },
              }}
            >
              SUBMIT
            </Button>
          </form>
        </div>
      </div>
    </Dialog>
      </LocalizationProvider>
    </div>
  )
}

export default FactoryTour
