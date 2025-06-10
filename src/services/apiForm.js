import supabase from "./supabase";

// GET ALL COMPLAINT
export const getAllComplaint = async () => {
  let { data, error } = await supabase.from("form_submissions").select("*");

  if (error) {
    throw error;
  }

  return data;
};

// CREATE COMPLAINT
export const createComplain = async (newComplain) => {
  const { data, error } = await supabase
    .from("form_submissions")
    .insert([newComplain]);
  if (error) {
    throw error;
  }

  return data;
};
