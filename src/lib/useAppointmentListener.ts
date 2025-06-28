// src/hooks/useAppointmentListener.ts
import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export const useAppointmentListener = (userId: string) => {
  const navigate = useNavigate();

  useEffect(() => {
    const channel = supabase
      .channel("realtime-appointments")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "appointments",
          filter: `user_id=eq.${userId}`,
        },
        (payload) => {
          if (payload.new.status === "approved") {
            navigate("/confirmation", { state: { appointment: payload.new } });
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [userId]);
};
