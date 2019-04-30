(ns ^:figwheel-hooks boil-cljs.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]))

(println "This text is printed from src/boil_cljs/core.cljs. Go ahead and edit it and see reloading in action.")

(defonce app-state (atom {:text "Hello world!"}))
(def click-count (reagent/atom 0))

(defn multiply [x y] (* x y))
(defn get-app-element []
  (gdom/getElement "app"))

(defn inc-atom [at num] (swap! at + num))
(defn hello-world []
  [:div
   "The atom " [:code "click-count"] " has value: "
   @click-count ". "
   [:input {:type "button" :value "Click me!"
            :on-click #(inc-atom click-count 3)}]
   [:input {:type "button" :value "Keep Going"
            :on-click #(js/alert "Keep Going")}]
   [:input {:type "button" :value "Shoot"
            :on-click #(js/alert "Shoot")}]
   [:input {:type "button" :value "Bomb"
            :on-click #(js/alert "Bomb")}]
   [:input {:type "button" :value "Retreat"
            :on-click #(js/alert "Retreat")}]])

(defn mount [el]
  (reagent/render-component [hello-world] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
