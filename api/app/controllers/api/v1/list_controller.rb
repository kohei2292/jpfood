class Api::V1::ListController < ApplicationController
    def index
        list = Food.all.order(id: "DESC")
        render json: { status: 'SUCCESS', message: 'Loaded list', title: "이번 달 추천", data: list }
    end
end
