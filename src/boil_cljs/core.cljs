(ns ^:figwheel-hooks boil-cljs.core
  (:require
   [goog.dom :as gdom]
   [reagent.core :as reagent :refer [atom]]))

(println "This text is printed from src/boil_cljs/core.cljs. Go ahead and edit it and see reloading in action.")

(defonce app-state (atom {:text "Hello world!" :key ""}))
(def ene-health (reagent/atom 25))
(def pla-health (reagent/atom 50))
(def random-val (reagent/atom 0))
(def status-atom (reagent/atom ""))

(defn multiply [x y] (* x y))
(defn get-app-element []
  (gdom/getElement "app"))

(defn inc-atom [at num] (swap! at + num))
(defn dec-atom [at num] (swap! at - num))
(defn randgen[] (rand-int 100))

(defn shotcheck? [number]    ;;checking for 80% probability of shot
  (if (< number 80) (dec-atom ene-health 5)))

(defn bombcheck? [number]    ;;checking for 40% probability of bomb
  (if (< number 40) (dec-atom ene-health 12)))

(defn eleminate [gone]
  (if (<= gone 0) [{:style {:color "red"}}] ))

(defn key-detect [capture](.-charCode capture))
(defn cap [e] #(swap! (:key app-state) (key-detect e)))
(defn f [e] (println (.-charCode e)))

(defn hello-world []
  [:div
  ;;"The atom random-val has value: " @random-val
  ;;[:input {:type "button" :value "Click me!"
  ;;        :on-click #(swap! random-val (rand-int 100))}]
    [:input {:type "button" :value "Keep Going"
          :onClick #(reset! status-atom "Advancing...")}]
    [:input {:type "button" :value "Shoot"
            :onClick #(shotcheck? (rand-int 100))}]
    [:input {:type "button" :value "Bomb"
            :onClick #(bombcheck? (rand-int 100))}]
    [:input {:type "button" :value "Retreat"
             :onClick #(reset! status-atom "Retreating...")}]
    [:input {:type "text" :value (:key @app-state)
             :on-key-press (fn [e]
                             (println "key press" (.-charCode e))
                             (if (= 13 (.-charCode e))
                               (println "ENTER")
                               (println (char (.-charCode e)))))}]

   [:p [eleminate @ene-health] "ENEMY HEALTH : " @ene-health]
   [:p "PLAYER HEALTH : " @pla-health]
   [:p "Player Status : " @status-atom]
   [:p (:key @app-state) " keystroke"]
   [:p (fn [e] (println (key-detect e)))]
   ])

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
